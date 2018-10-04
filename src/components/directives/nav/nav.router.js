function RouterConfig($stateProvider){
    'ngInject'
    $stateProvider
        .state('navigation', {
            template: '<nav>',
            abstract: true
        });
}
export default RouterConfig