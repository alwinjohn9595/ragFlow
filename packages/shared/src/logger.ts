import pino from 'pino'
import pretty from 'pino-pretty'
import { config } from './config'

const prettyStream = config.env === 'development' ? pretty({ colorize: true }) : undefined

export const logger = pino(
  { name: 'ragflow-clone', level: config.env === 'development' ? 'debug' : 'info' },
  prettyStream
)
