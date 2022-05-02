<template>
  <div>
    <div v-if="user">
      <h3>Você está logado!</h3>
      <p>Nome: {{ user.name }}</p>
      - Email:
      <p>{{ user.email }}</p>
    </div>
    <h3 v-else>Você NÃO está logado!</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ user: "auth/getUser" }),
  },
  mounted() {
    console.log("User: ", this.user);
  },
};
</script>

<style>
</style>