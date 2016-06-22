"use strict";
var router_1 = require('@angular/router');
var hero_1 = require('./hero/hero');
var hero_routes_1 = require('./hero/hero.routes');
exports.APP_ROUTES = [
    { path: '', redirectTo: 'hero', terminal: true },
    { path: 'hero',
        component: hero_1.HeroComponent,
        children: hero_routes_1.HERO_ROUTES.slice()
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.APP_ROUTES)
];

//# sourceMappingURL=app.routes.js.map
