System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/+about/about.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-about",templateUrl:"about.component.html",styleUrls:["about.component.css"]}),e("design:paramtypes",[])],a)}();return b.AboutComponent=g,c.exports}),System.registerDynamic("app/+about/index.js",["./about.component"],!0,function(a,b,c){"use strict";var d=a("./about.component");return b.AboutComponent=d.AboutComponent,c.exports}),System.registerDynamic("app/hero.js",[],!0,function(a,b,c){"use strict";var d=function(){function a(){}return a}();return b.Hero=d,c.exports}),System.registerDynamic("app/hero-detail/hero-detail.component.js",["@angular/core","../hero"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../hero"),h=function(){function a(){}return a.prototype.ngOnInit=function(){},d([f.Input(),e("design:type",g.Hero)],a.prototype,"hero",void 0),a=d([f.Component({moduleId:c.id,selector:"app-hero-detail",templateUrl:"hero-detail.component.html",styleUrls:["hero-detail.component.css"]}),e("design:paramtypes",[])],a)}();return b.HeroDetailComponent=h,c.exports}),System.registerDynamic("app/hero-detail/index.js",["./hero-detail.component"],!0,function(a,b,c){"use strict";var d=a("./hero-detail.component");return b.HeroDetailComponent=d.HeroDetailComponent,c.exports}),System.registerDynamic("app/office-account.component.js",["@angular/core","./+about","@angular/router","./hero-detail"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("./+about"),h=a("@angular/router"),i=a("./hero-detail"),j=function(){function a(){this.title="My Application!",this.heroes=k}return a.prototype.onSelect=function(a){this.selectedHero=a},a=d([f.Component({moduleId:c.id,selector:"office-account-app",templateUrl:"office-account.component.html",styleUrls:["office-account.component.css"],directives:[h.ROUTER_DIRECTIVES,i.HeroDetailComponent],providers:[h.ROUTER_PROVIDERS]}),h.Routes([{path:"/about",component:g.AboutComponent}]),e("design:paramtypes",[])],a)}();b.OfficeAccountAppComponent=j;var k=[{id:11,name:"Mr. Nice"},{id:12,name:"Narco"},{id:13,name:"Bombasto"},{id:14,name:"Celeritas"},{id:15,name:"Magneta"},{id:16,name:"RubberMan"},{id:17,name:"Dynama"},{id:18,name:"Dr IQ"},{id:19,name:"Magma"},{id:20,name:"Tornado"}];return c.exports}),System.registerDynamic("app/index.js",["./environment","./office-account.component"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}return d(a("./environment")),d(a("./office-account.component")),c.exports});