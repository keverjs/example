import { Injectable, Inject } from '@kever/ioc'
import { TestService } from './test'

@Injectable('index')
export class IndexService {
  @Inject('test')
  private testService: TestService
  async getData() {
    const data = await this.testService.getData()
    return data
  }
}
