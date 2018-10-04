var self
class AuthenBeforeStateChangeController{
    constructor($rootScope, AuthService, $state, CONSTANT, $transitions){
        'ngInject'
        this.$rootScope = $rootScope
        this.authService = AuthService
        this.$state = $state
        this.CONSTANT = CONSTANT
        this.$transitions = $transitions
        self = this
        
    }
    $onInit(){

        this.$transitions.onSuccess({}, () => {

        })

        this.$transitions.onBefore({}, () => {

        })

    }
}
export default AuthenBeforeStateChangeController