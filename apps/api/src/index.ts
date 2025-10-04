import express from 'express'
import bodyParser from 'body-parser'
import { router as queryRouter } from './routes/query'
import { router as ingestRouter } from './routes/ingest'
import { config } from '@shared/config.js'
import { logger } from '@shared/logger.js'

const app = express()
app.use(bodyParser.json())

app.use('/query', queryRouter)
app.use('/ingest', ingestRouter)

app.get('/health', (_, res) => res.json({ status: 'ok' }))

app.listen(config.port, () =>
  logger.info(`API running on port ${config.port}`)
)