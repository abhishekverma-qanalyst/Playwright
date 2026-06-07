const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function analyzeFailure(errorMessage) {
  const response = await client.responses.create({
    model: "gpt-5.5",
    input: `
Analyze this Playwright failure:

${errorMessage}

Provide:
1. Root cause
2. Suggested fix
`
  });

  return response.output_text;
}

module.exports = { analyzeFailure };