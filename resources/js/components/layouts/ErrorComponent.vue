<template>
  <div class="py-5 px-5">
    <ul>
      <li v-for="(error, i) in errors" :key="i" class="alert alert-danger">
        {{ error[0] }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ErrorComponent",
  props: {
    errors: {
      type: Array | Object,
      required: true,
    },
  },
};
</script>

<style>
</style>