import { Worker } from 'bullmq'
import { IngestJob } from '@shared/types'
import { logger } from '@shared/logger'
import { chunkText } from '@shared/chunker'
import { config } from '@shared/config.js'

const worker = new Worker<IngestJob>(
  'ingest',
  async job => {
    logger.info({ job: job.id }, 'Processing ingestion job')
    const chunks = chunkText(`Document from ${job.data.docPath}`)
    logger.info({ count: chunks.length }, 'Chunked successfully')
  },
  { connection: { url: config.REDIS_URL } }
)

worker.on('completed', job =>
  logger.info({ job: job.id }, 'Job completed')
)
worker.on('failed', (job, err) =>
  logger.error({ job: job?.id, err }, 'Job failed')
)