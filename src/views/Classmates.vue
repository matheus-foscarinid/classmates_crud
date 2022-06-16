<template>
  <div class="home">
    <div class="jumbotron m-3">
      <h1 class="display-4">Lista de Colegas!</h1>
      
      <table class="table table-dark mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="classmate in classmates"
            :key="classmate.id"
          >
            <td>{{ classmate.id }}</td>
            <td>{{ classmate.name }}</td>
            <td>{{ classmate.email }}</td>
            <td>
              <button 
                class="btn btn-sm btn-light mr-2" 
                @click="showClassmate(classmate.id)"
              >
                Ver
              </button>

              <button 
                class="btn btn-sm btn-danger" 
                @click="deleteClassmate(classmate.id)"
              >
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getRequest } from '@/services/apiService';

export default {
  name: 'Classmates',
  data() {
    return {
      classmates: [],
    };
  },
  async mounted() {
    this.classmates = await getRequest('/classmates');
  },

  methods: {
    showClassmate(classmateId) {
      console.log(this.$router.options);
      this.$router.push(`/classmates/${classmateId}`);
    },
  },
};
</script>
