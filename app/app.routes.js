"use strict";
var router_1 = require('@angular/router');
var hero_1 = require('./hero');
exports.APP_ROUTES = [
    { path: '', redirectTo: 'hero', pathMatch: 'full' },
    { path: 'hero',
        component: hero_1.HeroComponent,
        children: hero_1.HERO_ROUTES.slice()
    },
    { path: '**', redirectTo: 'hero', pathMatch: 'full' }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.APP_ROUTES)
];

//# sourceMappingURL=app.routes.js.map
