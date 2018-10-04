class LoginService {
    constructor($http, CONSTANT) {
        'ngInject'
        this.$http = $http
        this.CONSTANT = CONSTANT

    }

    auth(){
        console.log('call auth')
        return this.$http({
            method: 'GET',
            url: this.CONSTANT.RESTPATH.LOGIN.AUTH
          }).then((response) =>{
              return response.data
            }, (error) =>{
                return Promise.reject(error)
            }
        );
        
          
    }
}
export default LoginService