import Vue from 'vue';
import App from './App';
import router from './router/index.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

Vue.use(iView);

new Vue({
    el: '#app',
    router: router,
    // render: h => h(App)
    components: { App },
	template: '<App/>'
});