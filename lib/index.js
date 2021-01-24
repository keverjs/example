"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@kever/core");
const ioc_1 = require("@kever/ioc");
ioc_1.pluginPatch('globalPlugin', () => {
    return 'golbal';
});
ioc_1.pluginPatch('propertyPlugin', 'propertyOptions');
ioc_1.pluginPatch('routerAfterPlugin', () => {
    return 'router after options';
});
ioc_1.pluginPatch('routerBeforePlugin', () => {
    return 'router before options';
});
const config = {
    port: 9001,
    env: process.env.NODE_ENV,
};
core_1.createApp(config);
