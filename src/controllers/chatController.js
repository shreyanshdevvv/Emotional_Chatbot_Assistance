import openai from "../config/openai";
import Chat from "../models/Chat";

export const chatWithAI = async (req , res) => {
    try{
        const {userId , message} = req.body;

        const response = await openai.createChatCompletion({
            model: "gpt-4-turbo",
            messages: [{role: "user", content: message}]
        });

        const chat = new Chat({ userId , message , response: response.data.choices[0].message.content});
        await chat.save();

        res.json({reply : chat.response});
    } catch (error) {
        res.status(500).json({error: "Chatbot Error"});
    }
}