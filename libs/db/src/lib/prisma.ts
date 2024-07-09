import { neonConfig, Pool } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

if (!process.env.VERCEL_ENV) {
  // Set the WebSocket proxy to work with the local instance
  neonConfig.wsProxy = (host) => `${host}:5433/v1`;
  // Disable all authentication and encryption
  neonConfig.useSecureWebSocket = false;
  neonConfig.pipelineTLS = false;
  neonConfig.pipelineConnect = false;
}

neonConfig.webSocketConstructor = ws;
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);
export const prisma = new PrismaClient({ adapter });
