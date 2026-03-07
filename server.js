import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const groq = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1"
});

app.get("/", (req, res) => {
    res.send("Prompt Extension Backend Running");
});

app.post("/generate", async (req, res) => {
    try {
        const { userInput } = req.body;

        const completion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                {
                    role: "system",
                    content:
                        "You are an expert prompt engineer. Convert short task descriptions into powerful, structured, detailed prompts."
                },
                {
                    role: "user",
                    content: userInput
                }
            ],
            temperature: 0.7
        });

        res.json({
            prompt: completion.choices[0].message.content
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});