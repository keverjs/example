import { createApplication } from '@kever/core'
import { logger } from '@kever/logger'

const config = {
  port: 9000,
  env: process.env.NODE_ENV,
}
createApplication(config)
