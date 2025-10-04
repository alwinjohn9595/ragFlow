import { Queue } from 'bullmq'
import type { IngestJobPayload } from '@shared/types'
import { logger } from '@shared/logger.js'
import { config } from '@shared/config.js'

const ingestQueue = new Queue<IngestJobPayload>('ingest', {
  connection: { url: config.redisUrl }
})

export async function enqueueIngestJob(docPath: string, metadata: any) {
  await ingestQueue.add('start', { docPath, metadata })
  logger.info({ docPath }, 'Enqueued ingestion job')
}