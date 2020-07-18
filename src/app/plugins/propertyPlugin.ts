import { registerPlugin, PluginType, BasePlugin } from '@kever/ioc'

@registerPlugin('propertyPlugin', PluginType.property)
export class PropertyPlugin implements BasePlugin {
  constructor(options) {
    console.log('propertyOptions', options)
  }
  async ready() {
    return 'Hello world'
  }
}
