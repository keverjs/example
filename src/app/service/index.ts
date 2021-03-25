import { Injectable, Inject } from '@kever/ioc'
import { TestService } from './test'

@Injectable('index')
export class IndexService {
  public testSeervice: TestService
  async getData() {
    return {
      data: 'hello world',
    }
  }
}
