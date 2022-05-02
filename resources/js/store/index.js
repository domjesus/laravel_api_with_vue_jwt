import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
import UserModule from "./modules/UserModule";
import auth from "./auth";

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        // UserModule,
        auth,
    },
});
