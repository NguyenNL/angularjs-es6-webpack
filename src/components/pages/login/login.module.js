import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './login.router';
import './login.styl'

const moduleName = 'app.pages.login'
/* @ngInject */
angular.module(moduleName, [uiRouter])
    .config(routing)
export default moduleName