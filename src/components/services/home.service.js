class HomeService {
    constructor($http, CONSTANT, AuthService){
        'ngInject'
        this.$http = $http
        this.CONSTANT = CONSTANT
        this.authService = AuthService

    }

    uploadFile(data){
        console.log('call uploadFile')
        return this.$http({
            method: 'POST',
            url: this.CONSTANT.RESTPATH.HOME.UPLOAD_FILE,
            headers: {'Content-Type': undefined},
            data
        }).then((response) =>{
                return response.data
            }, (error) =>{
                return Promise.reject(error)
            }
        );
    }

    getPercentUploaded(){
        console.log('getPercentUploaded')
        return this.$http({
            method: 'GET',
            url: this.CONSTANT.RESTPATH.HOME.GET_PERCENT,
            headers: {
                'X-XSRF-TOKEN': this.authService.getXsrfToken()
            }
        }).then((response) =>{
                return response.data
            }, (error) =>{
                return Promise.reject(error)
            }
        );
    }

}
export default HomeService