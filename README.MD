# Angular2 Starter
An Angular2 starter/seed application with routing, Child component routing. Gulp as build tool for html, scss, images and typescript transpilation
Use this as starter/base/seed app to kickstart your Angular2 project

[DEMO](http://sirajc.github.io/angular2-starter)
## Steps to use
1. Fork and clone this repository
1. Run `npm install`
1. Run `npm run typings`, to install all the typing files
1. Run `gulp` to start watching html, scss and typescript changes and do a first build
1. On new termial run `npm start` to start lite-server with live reload support

## Angular2 Features
1. Code is based on Angular2 RC3
1. Components and Child Components and Directives
1. Usage of Router Directives and functions like `routerLink` and `router.navigate`
1. App Routing and Child Component Routing and linking using `@angular/router@3.0.0-alpha.8`

## Build Tool Features
1. Seperate build directory
1. One command `gulp` to watch scss, html, images and typescript
1. Any changes to html, ts or scss files reloads browser
1. Typescript transpilation on the flys

## TODO DEV Build
- [x] Typescript
- [x] Html
- [x] SCSS
- [x] Images
- [ ] Follow Angular 2 Styleguide
- [ ] TS Lint
- [ ] Integrate Codelyzer
- [ ] Unit Test
- [ ] E2E Test
- [ ] App tsd files

## TODO Integrations
- [X] Bootstrap 4 (Available in [@sirajc/angular2-bs4-navbar](https://github.com/sirajc/angular2-bs4-navbar))
- [ ] Font Awesome

## TODO PROD Build
- [ ] Minfications - CSS and JS
- [x] Image compression
- [ ] Vendor bundling
- [ ] Font Bundling
- [ ] Cache Buster

## NOTE
1. App runs on port 8001, configurable in bs-config.json under scripts
1. lite-server uses browserSync and runs on port 3000, configurable in bs-config.json

## Contributing
Create an issue on this repo if something is broken or if a feature is needed
Feel Free to create a Pull Request if you fixed anything
In case you want to add a feature, create an issue to disscuss the feature first

## Copyright and license

	The MIT License

	Copyright (c) 2015-2016 Sirajuddin Choudhary

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
