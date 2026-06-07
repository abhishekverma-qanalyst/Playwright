require("dotenv").config();

const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function main() {
  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 100,
    messages: [
      {
        role: "user",
        content: "Reply with exactly: Claude API working",
      },
    ],
  });

  console.log(response.content[0].text);
}

main().catch(console.error);