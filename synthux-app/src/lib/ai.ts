import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function getAiReport(logs: any[]) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `
    The following are logs from a user test. Please analyze the logs and provide a report that summarizes the user's experience.
    The report should include a summary of the user's actions, any issues they encountered, and recommendations for improvement.

    Logs:
    ${JSON.stringify(logs, null, 2)}
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}
