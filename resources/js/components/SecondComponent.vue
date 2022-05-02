<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Example Component</div>

          <div class="card-body">I'm an SECOND example component.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("SECOND Component mounted.");
    console.log("Setting user");
    this.$store.commit("SET_USER", { name: "SEBASTIÃO ALTERADO", idade: 35 });

    axios
      .post("/login", {
        email: "domjesus@gmail.com",
        password: "123456",
        remember: true,
      })
      .then((resp) => {
        console.log("Resposta: ", resp.data);
        this.$store.commit("SET_USER", resp.data);
      })
      .catch((err) => console.log("Erro: ", err.response.data.message));
  },
};
</script>
