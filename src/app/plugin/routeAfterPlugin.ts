import { BasePlugin, PluginType, Plugin } from '@kever/ioc'
import { Context, Next } from '@kever/core'

declare module '@kever/core' {
  interface Context {
    routerAfter: string
  }
}
@Plugin('routerAfterPlugin', PluginType.router)
export class RoutePlugin implements BasePlugin {
  constructor(options) {
    console.log('routerOptions', options)
  }
  async ready(raw: AsyncGeneratorFunction, ctx: Context, next: Next) {
    console.log('after call')
    ctx.routerAfter = 'routerAfterParams'
    return true
  }
}
