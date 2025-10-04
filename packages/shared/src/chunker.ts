export function chunkText(text: string, size = 500, overlap = 50) {
  const chunks = []
  let start = 0
  while (start < text.length) {
    const end = Math.min(text.length, start + size)
    chunks.push(text.slice(start, end))
    start += size - overlap
  }
  return chunks
}