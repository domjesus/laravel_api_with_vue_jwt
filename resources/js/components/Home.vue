<template>
  <dashboard v-if="authenticated" />
</template>

<script>
import { mapGetters } from "vuex";
import Dashboard from "./layouts/Dashboard.vue";
export default {
  computed: {
    ...mapGetters({ authenticated: "getIsAuthenticated" }),
  },
  components: { Dashboard },
};
</script>

<style>
</style>