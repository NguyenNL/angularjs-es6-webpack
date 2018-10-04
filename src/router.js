
function RouterConfig($urlRouterProvider, $locationProvider, $httpProvider, CONSTANT) {
    'ngInject'
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
    $locationProvider.hashPrefix('');
}
export default RouterConfig