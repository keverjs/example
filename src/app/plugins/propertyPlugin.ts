import { registerPlugin, PluginType, BasePlugin } from '@kever/ioc'

@registerPlugin('propertyPlugin', PluginType.property)
export class PropertyPlugin implements BasePlugin {
  constructor(...args) {
  }
  async ready() {
    return 'Hello world'
  }
}
