import $ from 'jquery'
class Navigation {
    constructor( AuthService, $scope, $state, CONSTANT, LogoutService, $rootScope) {
        'ngInject'
        this.authService = AuthService
        this.isDisplayDropDownList = false
        this.$scope = $scope
        this.$state = $state
        this.CONSTANT = CONSTANT
        this.logoutService = LogoutService
        this.$rootScope = $rootScope

    }

    $onInit(){
        $(document).click( (e) => {
            if(e.target.id !== 'drop-down' && e.target.className !== 'fa fa-caret-down drop-icon') {
                this.$scope.$apply(() => {
                    this.isDisplayDropDownList = false
                    
                }) 
            }
        })
       this.userInfo = this.authService.getUserInfo()
    }

    toggleDropDownList(){
        this.isDisplayDropDownList = !this.isDisplayDropDownList
    }


    logOut(event) {
        if(confirm("Are you sure you want to logout?")){
            gapi.auth2.getAuthInstance().signOut().then(() => {
                this.$state.go(this.CONSTANT.STATE.LOGIN)
                this.authService.removeUserInfo()
            });

        }
    }
    
}
export default Navigation