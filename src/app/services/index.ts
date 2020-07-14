import { Injectable, Inject } from '@kever/ioc'
import { TestService } from './test'

@Injectable('index')
export class IndexService {
  async getData() {
    return {
      data: 'Hello world',
    }
  }
}
