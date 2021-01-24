"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutePlugin = void 0;
const ioc_1 = require("@kever/ioc");
let RoutePlugin = class RoutePlugin {
    constructor(options) {
        console.log('golbal', options);
    }
    async ready(ctx, next) {
        ctx.globalTxt = '这时全局的plugin';
        console.log('这时全局的plugin');
        await next();
    }
};
RoutePlugin = __decorate([
    ioc_1.RegisterPlugin('globalPlugin', 0),
    __metadata("design:paramtypes", [Object])
], RoutePlugin);
exports.RoutePlugin = RoutePlugin;
