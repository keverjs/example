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
exports.TestService = void 0;
const ioc_1 = require("@kever/ioc");
let TestService = class TestService {
    async getData() {
        console.log(this.name);
        return {
            data: 'Hello test',
        };
    }
};
__decorate([
    ioc_1.PropertyPlugin('propertyPlugin'),
    __metadata("design:type", String)
], TestService.prototype, "name", void 0);
TestService = __decorate([
    ioc_1.Injectable('test')
], TestService);
exports.TestService = TestService;
