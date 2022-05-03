import router from "../../router";

export default {
    // namespaced: true,
    state: {
        user: {},
        authenticated: false,
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getIsAuthenticated(state) {
            return Boolean(state.authenticated);
        },
    },
    mutations: {
        SET_USER(state, newValue) {
            state.user = newValue;
        },
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },
    },
    actions: {
        login({ commit }) {
            return axios
                .get("/api/user")
                .then(({ data }) => {
                    // console.log("Data: ", data);

                    commit("SET_USER", data);
                    commit("SET_AUTHENTICATED", true);
                    router.push({ name: "Home" });
                })
                .catch(({ response: { data } }) => {
                    commit("SET_USER", {});
                    commit("SET_AUTHENTICATED", false);
                });
        },
        logout({ commit }) {
            commit("SET_USER", {});
            commit("SET_AUTHENTICATED", false);
        },
    },
};
