const OpenAI = require("openai");
const openai = new OpenAI();
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";

exports.explain = async (req, res) => {
  try {
    // Validate input
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({ error: "Code input is required" });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "developer",
          content: `You are a highly skilled Data Structures and Algorithms (DSA) tutor. Your task is to analyze the provided code.
                    1. If the code has errors, fix them, explain the issue, and provide the corrected code.
                    2. If the code is correct, explain the algorithm it uses and the problem it solves.
                    3. Walk through the code step-by-step in beginner-friendly language.
                    `,
        },
        {
          role: "user",
          content: `Here is the code:${code}`,
        },
      ],

    });
    // Extract the explanation
    const explanation = response?.choices[0]?.message;
    if (!explanation) {
        throw new Error("No response from OpenAI API.");
      }
  
      // Return the explanation
      return res.status(200).json({ explanation });
    } catch (error) {
        
      return res.status(500).json({
        error: "An error occurred while processing your request.",
        details: error.message,
      });
    }
};

