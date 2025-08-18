import { GoogleGenerativeAI } from "@google/generative-ai";

console.log(process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
