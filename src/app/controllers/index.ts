import { BaseController, Controller, Context, Next } from '@kever/core'
import { Get, Post, Put, Delete, All } from '@kever/router'
import { Inject, RouterPlugin, Aop, PropertyPlugin } from '@kever/ioc'
import { IndexService } from '../services'
import { TestService } from '../services/test'

@Controller()
export default class IndexController extends BaseController {
  @PropertyPlugin('propertyPlugin')
  private name: string

  @Inject('index')
  private indexService: IndexService
  @Inject('test', 'test')
  private testService: TestService
  @Get('/index')
  @RouterPlugin('routerAfterPlugin', Aop.after, 'Hello After router')
  @RouterPlugin('routerBeforePlugin', Aop.before, 'Hello Before Route')
  async index(ctx: Context, next: Next) {
    const name = this.name
    console.log('name', name)
    console.log('index call')
    const data = await this.indexService.getData()
    ctx.body = data
  }
  @Get('/test')
  async test(ctx: Context, next: Next) {
    const data = await this.testService.getData()
    ctx.body = data
  }
}
