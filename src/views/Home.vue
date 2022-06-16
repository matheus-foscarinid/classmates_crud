<template>
  <div class="home">
    <div class="jumbotron m-3">
      <h1 class="display-4">Bem vindo!</h1>

      <p class="lead">
        Este site é uma simples implementação de um CRUD de 
        Colegas, que contém alguns campos específicos
      </p>
      <hr class="my-4">

      <button 
        class="btn btn-lg btn-dark mt-3 mr-2"
        @click="$router.push('/classmates')"
      >
        Ver Colegas
      </button>

      <button 
        class="btn btn-lg btn-dark mt-3 mr-2"
        @click="$router.push('/about')"
      >
        Sobre
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
