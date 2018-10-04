import controller from './nav.controller'
import template from './nav.html'
import './nav.styl'
import router from './nav.router'
const moduleName = 'app.components.directives.nav'

angular.module(moduleName, [])
    .component('nav',{
        controller,
        template,
        controllerAs: 'vm',
        bindings: {

        }
    })
    .config(router)
export default moduleName