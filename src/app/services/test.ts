import { Injectable, Inject, usePropertyPlugin } from '@kever/ioc'

@Injectable('test')
export class TestService {
  @usePropertyPlugin('propertyPlugin')
  private name:Promise<string>
  async getData() {
    
    console.log(this.name)
    return {
      data: 'Hello test',
    }
  }
}
