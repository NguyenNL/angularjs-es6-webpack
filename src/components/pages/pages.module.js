
import loginPage from './login/login.module'
import homePage from './home/home.module'

const moduleName = 'app.page'

angular.module(moduleName, [
    loginPage, homePage
])

export default moduleName

