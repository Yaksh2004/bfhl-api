import axios from "axios";

export const getAI = async prompt => {
  if (typeof prompt !== "string") {
    throw new Error("Prompt must be a string");
  }
  if (prompt.trim() === "") {
    throw new Error("Prompt cannot be empty");
  }

  prompt = prompt.trim();
  prompt = `Reply with ONE WORD ONLY.\n${prompt}`;

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY,
        },
        timeout: 5000,
      },
    );

    let aiResponse =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Unknown";

    aiResponse = aiResponse.trim();

    const firstSpace = aiResponse.indexOf(" ");
    if (firstSpace !== -1) {
      aiResponse = aiResponse.substring(0, firstSpace);
    }

    return aiResponse;
  } catch (error) {
    if (error.response.status === 429) {
      throw new Error("Rate limit exceeded. Please try again later.");
    }
    throw new Error("Failed to get AI response");
  }
};
