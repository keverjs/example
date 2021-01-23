import { RegisterPlugin, PluginType, BasePlugin } from '@kever/ioc'

@RegisterPlugin('propertyPlugin', PluginType.property)
export class PropertyPlugin implements BasePlugin {
  constructor(options) {
    console.log('propertyOptions', options)
  }
  ready() {
    return 'Hello world'
  }
}
