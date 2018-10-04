import './themes/app.mat.styl'
import './themes/dialog.styl'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import '../node_modules/angularjs-toaster/toaster.css'


import angular from 'angular'
import 'angular-resource'
import  'angularjs-toaster'
import 'angular-cookies'
import uiRouter from 'angular-ui-router';
import RouterConfig from './router';
import components from './components/components.module'

import 'jquery'
import constant from './config/app.constant'
import intercepter from './components/interceptor/authInterceptor'
import httpConfig from './http.config'


const moduleName = 'app';
/* @ngInject */
angular.module(moduleName, [
    uiRouter,
    components,
    'toaster',
    'ngResource',
    'ngCookies',
    constant
    ]).factory('Intercepter', intercepter)
    .config(RouterConfig)
    .config(httpConfig)
    .run()
