import LoginController from './login.controller'
function RouterConfig($stateProvider){
    'ngInject'
    $stateProvider
        .state('login', {
            url: '/',
            template: require('./login.html'),
            controller: LoginController,
            controllerAs: 'vm'
        });
}
export default RouterConfig