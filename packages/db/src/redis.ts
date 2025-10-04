import { Redis } from 'ioredis'
import { config } from '@shared/config.js'

export const redis = new Redis(config.redisUrl)