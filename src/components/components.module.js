
import directives from './directives/directives.module';
import pages from './pages/pages.module';
import services  from './services/services.module';

const moduleName = 'app.components'

angular.module(moduleName,[
    pages,
    services,
    directives
])
export default moduleName
