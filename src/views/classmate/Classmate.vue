<template>
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

    <div class="mt-3">
      <button 
        class="btn btn-lg btn-info mr-2"
        @click="openEditClassmate"
      >
        Editar Colega
      </button>

      <button 
        class="btn btn-lg btn-danger"
        @click="deleteClassmate"
      >
        Excluir Colega
      </button>
    </div>
  </div>
</template>

<script>
import { getClassmate, deleteClassmate } from '@/services/classmate.service';
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
      this.classmate = await getClassmate(this.$route.params.id);
    },
    async deleteClassmate() {
      this.classmate = await deleteClassmate(this.$route.params.id);
      this.$router.push('/classmates');
    },
    openEditClassmate() {
      this.$router.push(`/classmates/${this.classmate.id}/edit`);
    }
  }
};
</script>
