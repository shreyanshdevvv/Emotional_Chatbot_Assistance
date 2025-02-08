import openai from "../config/openai.js";
import Chat from "../models/Chat.js";

export const chatWithAI = async (req, res) => {
    try {
        const { message } = req.body;
        const userId = req.user.id;  // Getting userId from auth middleware

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a compassionate and supportive AI therapist specializing in Cognitive Behavioral Therapy (CBT). You will engage in a conversation with the user to help them explore their thoughts and feelings, identify patterns, and develop coping strategies. -Help users manage stress , anxiety , and negative thoughts using CBT techniques. -Provide structured responses based on evidence-based psychology. -Use an empathetic and non-judgmental tone. -Ask reflective questions to guide users toward self-awareness. - Do not provide medical advice or diagnosis; recommend professional help when needed."
                },
                {
                    role: "user",
                    content: message
                }
            ]
        });

        const chat = new Chat({
            userId,
            message,
            response: completion.choices[0].message.content
        });
        await chat.save();

        res.json({ reply: chat.response });
    } catch (error) {
        console.error('Chat Error:', error);
        res.status(500).json({ error: "Chatbot Error" });
    }
}