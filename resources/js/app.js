import Vue from 'vue';
import router from './router';
import App from './components/App';
import store from "./store";
import VueClassNames from 'vue-classnames';

require('./bootstrap');

Vue.use(VueClassNames);

const app = new Vue({
    el: '#app',
    components: {
        App,
    },
    router,
    store
});
