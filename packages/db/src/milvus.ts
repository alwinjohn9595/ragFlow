import { MilvusClient } from '@zilliz/milvus2-sdk-node'
import { config } from '@shared/config.js'

export const milvus = new MilvusClient({ address: config.milvusHost })