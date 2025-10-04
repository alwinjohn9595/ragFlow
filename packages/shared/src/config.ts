import dotenv from 'dotenv';
dotenv.config();

export interface AppConfig {
  port: number;
  redisUrl: string;
  openaiKey: string;
  milvusHost: string;
  env: 'development' | 'production' | 'test' | string;
}

export const config: AppConfig = {
  port: Number(process.env.PORT) || 3000,
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  openaiKey: process.env.OPENAI_API_KEY || '',
  milvusHost: process.env.MILVUS_ADDR || 'localhost:19530',
  env: process.env.NODE_ENV || 'development',
};
