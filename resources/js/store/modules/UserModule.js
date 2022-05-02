export default {
    state: {
        user: { name: "Jose Manoel da Silveira", idade: 25 },
    },
    getters: {
        getUser(state) {
            return state.user;
        },
    },
    mutations: {
        SET_USER(state, newValue) {
            state.user = newValue;
        },
    },
    actions: {},
};
