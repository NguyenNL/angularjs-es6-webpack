
const moduleName = 'app.constant'
const domain = _PRODUCTION ? '' : 'https://localhost:8080'

angular.module(moduleName, []).constant('CONSTANT', {
    RESTPATH: {
        LOGIN: {
            AUTH: domain + '/user',
            CONNECT: domain + '/ws',
            SUBSCRIBE:'/topic/public',
            ADD_USER:'/app/chat.addUser'
        },
        LOGOUT: {
            SIGN_OUT: domain + '/logout'
        },
        HOME: {
            UPLOAD_FILE: domain + '/api/upload/eblox',
            GET_PERCENT: domain + '/api/upload/progress'
        }
    },
    AUTH:{
        TOKEN_KEY:'AuthorizationToken',
        USER_INFO:'USER_INFO'
    },
    STATE: {
        LOGIN: 'login',
        HOME:'navigation.home'
    }

})

export default moduleName
