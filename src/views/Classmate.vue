<template>
  <div class="classmate">
    <div class="jumbotron m-3">
      <h1>
        Informações sobre o Colega <b>{{ classmate.name }}</b>
      </h1>

      <p class="lead mt-4">Nome: {{ classmate.name }}</p>
      <p class="lead">Email: {{ classmate.email }}</p>
      <p class="lead">Idade: {{ classmate.age }}</p>
      <p class="lead">Matrícula: {{ classmate.registration_number }}</p>
      <p class="lead">Data de cadastro: {{ classmateCreationDate }}</p>

      <hr class="my-4">

      <button 
        class="btn btn-lg btn-info mt-3 mr-2"
      >
        Editar Colega
      </button>

      <button 
        class="btn btn-lg btn-danger mt-3 mr-2"
      >
        Excluir Colega
      </button>
    </div>
  </div>
</template>

<script>
import { getRequest } from '@/services/apiService';
import moment from 'moment';

export default {
  name: 'Clasmate',
  data() {
    return {
      classmate: {}
    };
  },

  computed: {
    classmateCreationDate() {
      return moment(this.classmate.created_at).format('DD/MM/YY h:mm:ss');
    }
  },

  mounted() {
    this.getClassmateInfo();
  },

  methods: {
    async getClassmateInfo() {
      this.classmate = await getRequest(`classmates/${this.$route.params.id}`);
    }
  }
};
</script>
