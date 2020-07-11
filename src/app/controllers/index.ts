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
    console.log('test call')
    const name = await this.name
    const data2 = await this.getData()
    const data1 = await this.getData2()
    const data = await this.indexService.getData()
    ctx.body = data
  }
  async getData() {
    return {
      data: 'Hello world'
    }
  }
  async getData2() {
    return {
      data: "hello world test"
    }
  }
}
