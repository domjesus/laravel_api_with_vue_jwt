<template>
  <div>
    <h3>Detalhando usuário</h3>
    {{ user }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ user: "getUser" }),
  },
  mounted() {
    // console.log("Montado detail...");
  },
};
</script>

<style>
</style>