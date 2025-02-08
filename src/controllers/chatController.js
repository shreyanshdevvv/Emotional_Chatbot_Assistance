import openai from "../config/openai";
import Chat from "../models/Chat";

export const chatWithAI = async (req , res) => {
    try{
        const {userId , message} = req.body;

        const response = await openai.createChatCompletion({
            model: "gpt-4-turbo",
            messages: [{role: "system", content: "You are a compassionate and supportive AI therapist specializing in Cognitive Behavioral Therapy (CBT). You will engage in a conversation with the user to help them explore their thoughts and feelings, identify patterns, and develop coping strategies. -Help users manage stress , anxiety , and negative thoughts using CBT techniques. -Provide structured responses based on evidence-based psychology. -Use an empathetic and non-judgmental tone. -Ask reflective questions to guide users toward self-awareness. - Do not provide medical advice or diagnosis; recommend professional help when needed."} , {role: "user", content: message}]
        });

        const chat = new Chat({ userId , message , response: response.data.choices[0].message.content});
        await chat.save();

        res.json({reply : chat.response});
    } catch (error) {
        res.status(500).json({error: "Chatbot Error"});
    }
}