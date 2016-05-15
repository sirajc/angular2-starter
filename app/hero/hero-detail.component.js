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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var heroes_const_1 = require('./heroes.const');
var HeroDetail = (function () {
    function HeroDetail(_params) {
        this._params = _params;
        this.id = Number(_params.get('id'));
        if (this.id) {
            this.hero = this._getHero(this.id);
        }
    }
    HeroDetail.prototype._getHero = function (id) {
        var hero;
        heroes_const_1.HEROES.forEach(function (element) {
            if (element.id === id) {
                hero = element;
            }
        });
        return hero;
    };
    HeroDetail = __decorate([
        core_1.Component({
            selector: 'hero-detail',
            templateUrl: 'app/hero/hero-detail.component.html',
            styles: ["\n    .hero-detail {\n      font-size: 120%;\n      font-weight: 700;\n    }\n  "],
            inputs: ['hero'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
    ], HeroDetail);
    return HeroDetail;
}());
exports.HeroDetail = HeroDetail;

//# sourceMappingURL=hero-detail.component.js.map