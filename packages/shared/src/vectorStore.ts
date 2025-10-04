const store: any[] = []

export async function upsertVector(vector: number[], metadata: any) {
  store.push({ vector, metadata })
}
export async function searchVector(_: string, k = 3) {
  return store.slice(0, k)
}