const register = {
    path: "/register",
    name: "Register",
    component: () =>
        import(
            /* webpackChunkName: "js/RegisterComponent" */ "./../components/layouts/Register.vue"
        ),
    meta: {
        middleware: "guest",
        title: `Register`,
    },
};

const login = {
    path: "/login",
    name: "Login",
    component: () =>
        import(
            /* webpackChunkName: "js/LoginComponent" */ "./../components/layouts/Login.vue"
        ),
    meta: {
        middleware: "guest",
        title: `Login`,
    },
};

/* Authenticated Component */
const dashboard = {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
        import(
            "../components/layouts/Dashboard.vue" /* webpackChunkName: "js/dashboard" */
        ),
    meta: {
        middleware: "guest",
        title: `Dashboard`,
    },
};
/* Authenticated Component */

export { register, login, dashboard };
