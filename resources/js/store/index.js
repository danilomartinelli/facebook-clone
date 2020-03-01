import Vue from "vue";
import Vuex from "vuex";
import User from "./modules/user";
import General from "./modules/general";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        User,
        General,
    },
});
