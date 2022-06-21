<template>
  <div class="about">
    <div class="jumbotron m-3">
      <h1 class="display-4 mb-4">Sobre</h1>

      <p class="lead">
        Este projeto foi criado com o fim de aprendizado do poderosíssimo 
        framework <b>Vue</b>, que foi utilizado em todo o desenvolvimento deste projeto.
      </p>

      <p class="lead">
        Foi implementado para a situação uma simples, 
        porém poderosa API que faz toda a implementação da lógica de 
        backend deste CRUD em <b>Ruby on Rails</b>, outra poderosa tecnologia.
      </p>

      <p class="lead">
        Para acessar o repositório da API usado para este projeto basta acessar este link: 
        <a href="https://github.com/matheus-foscarinid/rails_orm">API</a>
      </p>

      <hr class="my-4">

      <p class="lead pt-1 extra">
        P.S: Para mais informações sobre o projeto, acesse meus <a href="https://github.com/matheus-foscarinid">repositórios</a> :)
      </p>
      
      <div class="icon-container">
        <!-- O link é direto do Github mesmo, como é apenas para um projeto de brincadeira -->
        <img class="icon" src="https://avatars.githubusercontent.com/u/57161520?v=4" />
        <div class="text-container">
          <span class="name ml-3">Matheus Dias</span>
          <span class="title ml-3">Fullstack developer</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .icon-container {
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    width: 20%;
    display: flex;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .icon {
    border-radius: 50%;
    width: 70px;
  }

  .name {
    font-size: 15px;
    font-weight: bold;
    color: #333;
  }

  .title {
    font-size: 12px;
    color: #666;
  }

  .extra {
    font-size: 12px;
    opacity: 0.7;
  }
</style>
