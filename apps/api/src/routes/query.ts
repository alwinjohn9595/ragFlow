import { Router, type IRouter, type Request, type Response } from 'express'
import { getAnswer } from '../services/query.service'

export const router: IRouter = Router()
router.post('/', async (req: Request, res: Response) => {
  const { question } = req.body
  const answer = await getAnswer(question)
  res.json({ answer })
})