"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var blog_component_1 = require("../blog/blog.component");
var news_component_1 = require("../news/news.component");
var proplayers_component_1 = require("../proplayers/proplayers.component");
var proteams_component_1 = require("../proteams/proteams.component");
var teams_component_1 = require("../teams/teams.component");
var routes = [
    { path: 'proplayer', component: proplayers_component_1.ProplayersComponent },
    { path: 'proteams', component: proteams_component_1.ProteamsComponent },
    { path: 'teams', component: teams_component_1.TeamsComponent },
    { path: 'news', component: news_component_1.NewsComponent },
    { path: 'blog', component: blog_component_1.BlogComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=routing.module.js.map
