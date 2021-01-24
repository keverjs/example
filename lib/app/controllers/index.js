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
const core_1 = require("@kever/core");
const router_1 = require("@kever/router");
const ioc_1 = require("@kever/ioc");
const services_1 = require("../services");
const test_1 = require("../services/test");
let IndexController = class IndexController extends core_1.BaseController {
    async index(ctx, next) {
        const name = this.name;
        console.log('name', name);
        console.log('index call');
        const data = await this.indexService.getData();
        ctx.body = data;
    }
    async test(ctx, next) {
        const data = await this.testService.getData();
        ctx.body = data;
    }
};
__decorate([
    ioc_1.PropertyPlugin('propertyPlugin'),
    __metadata("design:type", String)
], IndexController.prototype, "name", void 0);
__decorate([
    ioc_1.Inject('index'),
    __metadata("design:type", services_1.IndexService)
], IndexController.prototype, "indexService", void 0);
__decorate([
    ioc_1.Inject('test', 'test'),
    __metadata("design:type", test_1.TestService)
], IndexController.prototype, "testService", void 0);
__decorate([
    router_1.Get('/index'),
    ioc_1.RouterPlugin('routerAfterPlugin', 1, 'Hello After router'),
    ioc_1.RouterPlugin('routerBeforePlugin', 0, 'Hello Before Route'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Function]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "index", null);
__decorate([
    router_1.Get('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Function]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "test", null);
IndexController = __decorate([
    core_1.Controller()
], IndexController);
exports.default = IndexController;
