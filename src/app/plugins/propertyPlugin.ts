import { registerPlugin, PluginType, BasePlugin } from '@kever/ioc'
import {} from '@kever/core'

@registerPlugin('propertyPlugin', PluginType.property)
export class PropertyPlugin implements BasePlugin {
  constructor(...args) {
    console.log('propertyPlugin', args)
  }
  async ready() {
    return 'Hello world'
  }
}
