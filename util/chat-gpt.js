const OpenAI = require("openai");

console.log(process.env.OPENAI_API_KEY);

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // keep this in .env
});

module.exports = client;
