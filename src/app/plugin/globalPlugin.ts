import { BasePlugin, PluginType, Plugin } from '@kever/ioc'
import { Context, Next } from '@kever/core'

declare module '@kever/core' {
  interface Context {
    globalTxt: string
  }
}
@Plugin('globalPlugin', PluginType.global)
export class RoutePlugin implements BasePlugin {
  constructor(options) {
    console.log('golbal', options)
  }
  async ready(ctx: Context, next: Next) {
    ctx.globalTxt = '这时全局的plugin'
    console.log('这时全局的plugin')
    await next()
  }
}
