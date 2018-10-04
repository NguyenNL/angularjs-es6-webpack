import  nav from './nav/nav.module'
import authenBeforeStateChange from './authen-before-state-change/authen.module'

const moduleName = 'app.components.directives'

angular.module(moduleName,[
    nav, authenBeforeStateChange
])

export default moduleName