import { BasePlugin, registerPlugin, PluginType } from '@kever/ioc'
import { Context, Next } from '@kever/core'

declare module '@kever/core' {
  interface Context {
    routerBefore: string
  }
}
@registerPlugin('routerBeforePlugin', PluginType.route)
export class RoutePlugin implements BasePlugin {
  constructor(...args) {
  }
  async ready(raw: AsyncGeneratorFunction,ctx: Context, next: Next) {
    ctx.routerBefore = 'routerBeforeParams'
  }
}
