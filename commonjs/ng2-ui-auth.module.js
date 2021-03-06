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
var config_service_1 = require('./config.service');
exports.CustomConfig = config_service_1.CustomConfig;
exports.ConfigService = config_service_1.ConfigService;
var shared_service_1 = require('./shared.service');
exports.SharedService = shared_service_1.SharedService;
var jwt_http_service_1 = require('./jwt-http.service');
exports.JwtHttp = jwt_http_service_1.JwtHttp;
var oauth_service_1 = require('./oauth.service');
exports.OauthService = oauth_service_1.OauthService;
var popup_service_1 = require('./popup.service');
exports.PopupService = popup_service_1.PopupService;
var oauth1_service_1 = require('./oauth1.service');
exports.Oauth1Service = oauth1_service_1.Oauth1Service;
var oauth2_service_1 = require('./oauth2.service');
exports.Oauth2Service = oauth2_service_1.Oauth2Service;
var local_service_1 = require('./local.service');
exports.LocalService = local_service_1.LocalService;
var auth_service_1 = require('./auth.service');
exports.AuthService = auth_service_1.AuthService;
var storage_service_1 = require('./storage.service');
exports.StorageService = storage_service_1.StorageService;
exports.BrowserStorageService = storage_service_1.BrowserStorageService;
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Ng2UiAuthModule = (function () {
    function Ng2UiAuthModule() {
    }
    Ng2UiAuthModule.forRootWithCustomHttp = function (config, httpProvider) {
        return {
            ngModule: Ng2UiAuthModule,
            providers: [
                { provide: config_service_1.CustomConfig, useClass: config },
                { provide: config_service_1.ConfigService, useClass: config_service_1.ConfigService, deps: [config_service_1.CustomConfig] },
                { provide: storage_service_1.StorageService, useClass: storage_service_1.BrowserStorageService, deps: [config_service_1.ConfigService] },
                { provide: shared_service_1.SharedService, useClass: shared_service_1.SharedService, deps: [storage_service_1.StorageService, config_service_1.ConfigService] },
                httpProvider,
                { provide: oauth_service_1.OauthService, useClass: oauth_service_1.OauthService, deps: [jwt_http_service_1.JwtHttp, core_1.Injector, shared_service_1.SharedService, config_service_1.ConfigService] },
                { provide: popup_service_1.PopupService, useClass: popup_service_1.PopupService, deps: [config_service_1.ConfigService] },
                { provide: oauth1_service_1.Oauth1Service, useClass: oauth1_service_1.Oauth1Service, deps: [jwt_http_service_1.JwtHttp, popup_service_1.PopupService, config_service_1.ConfigService] },
                { provide: oauth2_service_1.Oauth2Service, useClass: oauth2_service_1.Oauth2Service, deps: [jwt_http_service_1.JwtHttp, popup_service_1.PopupService, storage_service_1.StorageService, config_service_1.ConfigService] },
                { provide: local_service_1.LocalService, useClass: local_service_1.LocalService, deps: [jwt_http_service_1.JwtHttp, shared_service_1.SharedService, config_service_1.ConfigService] },
                { provide: auth_service_1.AuthService, useClass: auth_service_1.AuthService, deps: [shared_service_1.SharedService, local_service_1.LocalService, oauth_service_1.OauthService] },]
        };
    };
    Ng2UiAuthModule.forRoot = function (config) {
        return {
            ngModule: Ng2UiAuthModule,
            providers: [
                { provide: config_service_1.CustomConfig, useClass: config },
                { provide: config_service_1.ConfigService, useClass: config_service_1.ConfigService, deps: [config_service_1.CustomConfig] },
                { provide: storage_service_1.StorageService, useClass: storage_service_1.BrowserStorageService, deps: [config_service_1.ConfigService] },
                { provide: shared_service_1.SharedService, useClass: shared_service_1.SharedService, deps: [storage_service_1.StorageService, config_service_1.ConfigService] },
                { provide: jwt_http_service_1.JwtHttp, useClass: jwt_http_service_1.JwtHttp, deps: [http_1.Http, shared_service_1.SharedService, config_service_1.ConfigService] },
                { provide: oauth_service_1.OauthService, useClass: oauth_service_1.OauthService, deps: [jwt_http_service_1.JwtHttp, core_1.Injector, shared_service_1.SharedService, config_service_1.ConfigService] },
                { provide: popup_service_1.PopupService, useClass: popup_service_1.PopupService, deps: [config_service_1.ConfigService] },
                { provide: oauth1_service_1.Oauth1Service, useClass: oauth1_service_1.Oauth1Service, deps: [jwt_http_service_1.JwtHttp, popup_service_1.PopupService, config_service_1.ConfigService] },
                { provide: oauth2_service_1.Oauth2Service, useClass: oauth2_service_1.Oauth2Service, deps: [jwt_http_service_1.JwtHttp, popup_service_1.PopupService, storage_service_1.StorageService, config_service_1.ConfigService] },
                { provide: local_service_1.LocalService, useClass: local_service_1.LocalService, deps: [jwt_http_service_1.JwtHttp, shared_service_1.SharedService, config_service_1.ConfigService] },
                { provide: auth_service_1.AuthService, useClass: auth_service_1.AuthService, deps: [shared_service_1.SharedService, local_service_1.LocalService, oauth_service_1.OauthService] },]
        };
    };
    Ng2UiAuthModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2UiAuthModule);
    return Ng2UiAuthModule;
}());
exports.Ng2UiAuthModule = Ng2UiAuthModule;
//# sourceMappingURL=ng2-ui-auth.module.js.map