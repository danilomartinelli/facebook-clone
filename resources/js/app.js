import Vue from 'vue';
import router from './router';
import App from './components/App';
import Login from "./views/Guest/Login";
import store from "./store";
import VueClassNames from 'vue-classnames';

require('./bootstrap');

Vue.use(VueClassNames);

const app = new Vue({
    el: '#app',
    components: {
        App,
        Login
    },
    router,
    store
});
