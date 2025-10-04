export async function createEmbedding(text: string) {
  return Array.from({ length: 5 }, () => Math.random())
}