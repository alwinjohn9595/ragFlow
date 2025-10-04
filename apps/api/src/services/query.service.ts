import { askLLM } from '@llm/openai'

export async function getAnswer(question: string) {
  const prompt = `Answer based on the RAG context:\n${question}`
  return askLLM(prompt)
}