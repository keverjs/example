import { Controller, Context, Next } from '@kever/core'
import { Inject } from '@kever/ioc'
import { Get} from '@kever/router'
import { IndexService } from '../service'

@Controller('/index')
export default class IndexController {
  @Inject('index')
  private indexService: IndexService
  
  @Get('/index')
  async index(ctx: Context, next: Next) {
    ctx.body = {
      data: "Hello world"
    }
  }
  @Get('/test/:id')
  async test(ctx: Context, next: Next) {
    const query = ctx.params
    const data = await this.indexService.getData()
    ctx.body = query
  }
}
