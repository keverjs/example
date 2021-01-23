import { BasePlugin, RegisterPlugin, PluginType } from '@kever/ioc'
import { Context, Next } from '@kever/core'

declare module '@kever/core' {
  interface Context {
    routerBefore: string
  }
}
@RegisterPlugin('routerBeforePlugin', PluginType.router)
export class RoutePlugin implements BasePlugin {
  constructor(options) {
    console.log('routerBefore', options)
  }
  async ready(raw: AsyncGeneratorFunction, ctx: Context, next: Next) {
    console.log('before call')
    ctx.routerBefore = 'routerBeforeParams'
  }
}
