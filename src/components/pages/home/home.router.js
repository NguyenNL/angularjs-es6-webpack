import HomeController from './home.controller'
function RouterConfig($stateProvider){
    'ngInject'
    $stateProvider
        .state('navigation.home', {
            url: '/home',
            template: require('./home.html'),
            controller: HomeController,
            controllerAs: 'vm'
        });
}
export default RouterConfig