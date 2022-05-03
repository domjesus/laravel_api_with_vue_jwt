<template>
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 col-md-6 offset-md-3">
        <div class="card shadow sm">
          <div class="card-body">
            <h1 class="text-center">Login</h1>
            <hr />
            <form action="javascript:void(0)" class="row" method="post">
              <div class="form-group col-12">
                <label for="email" class="font-weight-bold">Email</label>
                <input
                  type="text"
                  v-model="auth.email"
                  name="email"
                  id="email"
                  class="form-control"
                />
              </div>
              <div class="form-group col-12">
                <label for="password" class="font-weight-bold">Password</label>
                <input
                  type="password"
                  v-model="auth.password"
                  name="password"
                  id="password"
                  class="form-control"
                />
              </div>
              <div class="col-12 mb-2">
                <button
                  type="submit"
                  :disabled="processing"
                  @click="login"
                  class="btn btn-primary btn-block"
                >
                  {{ processing ? "Please wait" : "Login" }}
                </button>
              </div>
              <div class="col-12 text-center">
                <label
                  >Não tem uma conta?
                  <router-link :to="{ name: 'Register' }"
                    >Registre-se!</router-link
                  ></label
                >
              </div>
              <error-component :errors="errors" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ErrorComponent from "./ErrorComponent.vue";

export default {
  components: { ErrorComponent },
  name: "LoginComponent",
  data() {
    ErrorComponent;
    return {
      auth: {
        email: "",
        password: "",
      },
      processing: false,
      errors: [],
    };
  },
  methods: {
    ...mapActions({
      signIn: "login",
    }),
    async login() {
      this.processing = true;
      await axios.get("/sanctum/csrf-cookie");
      await axios
        .post("/login", this.auth)
        .then(({ data }) => {
          //   console.log("Retorno: ", data);

          this.signIn();
        })
        .catch(({ response: { data } }) => {
          this.errors = data.errors;
          // alert(data.message);
        })
        .finally(() => {
          this.processing = false;
        });
    },
  },
};
</script>