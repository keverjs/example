import { BasePlugin, registerPlugin, PluginType } from '@kever/ioc'
import { Context, Next } from '@kever/core'

@registerPlugin('globalPlugin', PluginType.global)
export class RoutePlugin implements BasePlugin {
  async ready(ctx: Context, next: Next) {
    // console.log('这是全局的plugin')
    next()
  }
}
