import { BasePlugin, PluginType, Plugin } from '../../../../kever/packages/ioc'

@Plugin('propertyPlugin', PluginType.property)
export class PropertyPlugin implements BasePlugin {
  constructor(options) {
    console.log('propertyOptions', options)
  }
  ready() {
    return 'Hello world'
  }
}
