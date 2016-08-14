"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var common_1 = require('@angular/common');
var app_1 = require('./app');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_1.AppModule, {
    compilerOptions: {
        providers: [
            { provide: common_1.APP_BASE_HREF, useValue: '/angular2-bs4-navbar' }
        ]
    }
});

//# sourceMappingURL=main-io.js.map
