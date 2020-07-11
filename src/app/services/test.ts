import { Injectable } from '@kever/ioc'

@Injectable('test')
export class TestService {
  async getData() {
    return {
      data: 'Hello test',
    }
  }
}
