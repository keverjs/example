import { createApplication } from '@kever/core'
import { pluginPatch } from '@kever/ioc'
import { logger } from '@kever/logger'

// 第二个参数可以是函数
pluginPatch('globalPlugin', () => {
  return 'golbal'
})
pluginPatch('propertyPlugin', 'propertyOptions')
pluginPatch('routerAfterPlugin', () => {
  return 'router after options'
})
pluginPatch('routerBeforePlugin', () => {
  return 'router before options'
})

const config = {
  port: 9001,
  env: process.env.NODE_ENV,
}
createApplication(config)
