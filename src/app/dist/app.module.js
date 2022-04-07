"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var proteams_component_1 = require("./proteams/proteams.component");
var teams_component_1 = require("./teams/teams.component");
var proplayers_component_1 = require("./proplayers/proplayers.component");
var news_component_1 = require("./news/news.component");
var blog_component_1 = require("./blog/blog.component");
var nav_component_1 = require("./nav/nav.component");
var forms_1 = require("@angular/forms");
var routing_module_1 = require("./routing/routing.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                proteams_component_1.ProteamsComponent,
                teams_component_1.TeamsComponent,
                proplayers_component_1.ProplayersComponent,
                news_component_1.NewsComponent,
                blog_component_1.BlogComponent,
                nav_component_1.NavComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
