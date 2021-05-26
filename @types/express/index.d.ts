import { clientType } from '../../src/database/client'

declare global {
  namespace Express {
    interface Request {
      client?: clientType
    }
  }
}