
import LoginService from './login.service'
import HomeService from './home.service'
const moduleName = 'app.service'

angular.module(moduleName, [])
    .service('LoginService', LoginService)
    .service('HomeService', HomeService)

export default moduleName
