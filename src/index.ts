import { createApp } from 'vue';
import buildContainer from './container.config';
import router from './business/config/RouteConfig';

import './styles';

class Bootstrap {
    constructor() {
        this.loadDependencies();
        this.loadVue();
    }

    private loadDependencies() {
        buildContainer();
    }

    private loadVue() {
        const app = createApp({});
        app.use(router);

        app.mount('#app');
    }
}

new Bootstrap();