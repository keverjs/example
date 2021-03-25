import { Injectable, Inject, UsePlugin, PluginType } from '@kever/ioc'

@Injectable('test')
export class TestService {
  @UsePlugin(PluginType.property, 'propertyPlugin')
  private name: string
  async getData() {
    
    console.log(this.name)
    
    return {
      data: 'Hello test',
    }
  }
}
