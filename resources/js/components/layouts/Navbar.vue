<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      v-if="authenticated"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> / </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                href="#"
                to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/DetailUser"
                >Detalhar User</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Selecione...
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item" to="/terceiro"
                    >Outro component</router-link
                  >
                </li>
              </ul>
            </li>

            <!-- <li class="nav-item dropdown" v-if="authenticated">
              <a
                class="dropdown-item dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ user.name }}
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style="list-style-type: none"
              >
                <li>
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="javascript:void(0)"
                    @click="logout"
                    >Logout</a
                  >
                </li>
              </ul>
            </li> -->
          </ul>
        </div>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ user.name }}
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a
                    class="dropdown-item"
                    href="javascript:void(0)"
                    @click="logout"
                    >Logout</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "getUser",
      authenticated: "getIsAuthenticated",
    }),
  },
  mounted() {
    console.log("Montado navbaar: ", this.$store);
  },
  methods: {
    ...mapActions({
      signOut: "logout",
    }),
    async logout() {
      await axios.post("/logout").then(({ data }) => {
        this.signOut();
        this.$router.push({ name: "Login" });
      });
    },
  },
};
</script>

<style>
</style>