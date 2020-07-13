import { BaseController, Controller, Context, Next } from '@kever/core'
import { Get, Post, Put, Delete, All } from '@kever/router'
import {
  Inject,
  useRoutePlugin,
  AopRoute,
  usePropertyPlugin,
} from '@kever/ioc'
import { IndexService } from '../services'

@Controller()
export default class IndexController extends BaseController {
  @usePropertyPlugin('propertyPlugin')
  private name: Promise<string>

  @Inject('index')
  private indexService: IndexService

  @Get('/test')
  @useRoutePlugin('routerAfterPlugin', AopRoute.after, {
    params: "Hello After Route"
  })
  @useRoutePlugin('routerBeforePlugin', AopRoute.before, {
    params: 'Hello Before Route',
  })
  async test(ctx: Context, next: Next) {
    const name = await this.name
    const data = await this.indexService.getData()
    ctx.body = data
  }
}
