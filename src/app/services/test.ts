import { Injectable, Inject, PropertyPlugin } from '@kever/ioc'

@Injectable('test')
export class TestService {
  @PropertyPlugin('propertyPlugin')
  private name: string
  async getData() {
    
    console.log(this.name)
    
    return {
      data: 'Hello test',
    }
  }
}
