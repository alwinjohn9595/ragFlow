import { Router, type IRouter, type Request, type Response } from 'express'
import { enqueueIngestJob } from '../services/ingest.services.js'

export const router: IRouter = Router()

router.post('/', async (req: Request, res: Response) => {
  const { path, metadata } = req.body as { path: string; metadata?: Record<string, any> }
  await enqueueIngestJob(path, metadata)
  res.json({ status: 'queued' })
})