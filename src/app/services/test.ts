import { Injectable, Inject, UsePlugin, PluginType } from '../../../../kever/packages/ioc'

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
