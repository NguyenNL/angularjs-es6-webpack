
var self
class AuthInterceptor{
    constructor($location, $q){
        this.$location = $location;
        this.$q = $q;
        self = this
    }

    request (config) {
        console.log('Interceptor', config)
        return config

    }

    response(response){
        return response
    }

    responseError (rejection) {
        console.log('responseError', rejection)
        return self.$q.reject(rejection);
    }

    requestError(rejection){
        console.log('request error', rejection)
        return self.$q.reject(rejection);
    }

    static factory ($location, $q, $cookies) {
        return new AuthInterceptor($location, $q, $cookies);
    }
    
}
AuthInterceptor.factory.$inject = ['$location', '$q', '$cookies'];

export default AuthInterceptor.factory