import { Router } from 'express'
import { enqueueIngestJob } from '../services/ingest.service.js'

export const router = Router()

router.post('/', async (req, res) => {
  const { path, metadata } = req.body
  await enqueueIngestJob(path, metadata)
  res.json({ status: 'queued' })
})