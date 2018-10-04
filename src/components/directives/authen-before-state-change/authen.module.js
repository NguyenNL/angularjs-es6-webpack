import controller from './authen.controller'

const moduleName = 'app.components.directives.authen'

angular.module(moduleName,[])
    .component('authenBeforeStateChange',{
        controller,
        controllerAs: 'vm'
    })

export default moduleName