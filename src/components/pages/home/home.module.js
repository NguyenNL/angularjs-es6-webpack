import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './home.router';
import './home.styl'

const moduleName = 'app.pages.home'
/* @ngInject */
angular.module(moduleName, [uiRouter])
    .config(routing)
export default moduleName