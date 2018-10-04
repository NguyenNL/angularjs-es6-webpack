
function HttpConfig($urlRouterProvider, $locationProvider, $httpProvider, $provide) {
    'ngInject'
    $httpProvider.interceptors.push('Intercepter');
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest'
    // $httpProvider.defaults.withCredentials = true
}
export default HttpConfig
