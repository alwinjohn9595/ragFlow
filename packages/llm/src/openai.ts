import OpenAI from 'openai'
import { config } from '@shared/config.js'

const client = new OpenAI({ apiKey: config.openaiKey })

export async function askLLM(prompt: string) {
  const res = await client.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: [{ role: 'user', content: prompt }]
  })
  return res.choices[0].message?.content || ''
}