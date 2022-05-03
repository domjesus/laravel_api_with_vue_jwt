import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
// import HomeComponent from "./../components/HomeComponent.vue";

import { dashboard, login, register } from "./register";
// import App from "./../components/App.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(
                "./../components/Home.vue" /* webpackChunkName: "js/Home"  */
            ),
    },
    {
        path: "/DetailUser",
        name: "DetailUser",
        component: () =>
            import(
                "./../components/DetailUser.vue" /* webpackChunkName: "js/Home"  */
            ),
    },
    register,
    login,
    dashboard,
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`;
    if (to.meta.middleware == "guest") {
        if (store.state.UserModule.authenticated) {
            next({ name: "Dashboard" });
        }
        next();
    } else {
        if (store.state.UserModule.authenticated) {
            next();
        } else {
            next({ name: "Login" });
        }
    }
});

export default router;
