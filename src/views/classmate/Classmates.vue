<template>
  <div class="home">
    <div class="jumbotron m-3">
      <h1 class="display-4">
        Lista de Colegas! 
        <small style="font-size: 25px; color: #777">(total {{ classmates.length }})</small>
      </h1>
      
      <div class="mt-5">
        <button 
          class="btn btn btn-success"
          @click="openCreateClassmate()"
        >
          <i class="fa-solid fa-plus"></i>
          Criar Colega
        </button>
        
        <table class="table table-dark mt-2">
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
                  @click="openViewClassmate(classmate.id)"
                >
                  <i class="fa-solid fa-eye"></i>
                  Ver
                </button>

                <button 
                  class="btn btn-sm btn-danger" 
                  @click="deleteClassmate(classmate.id)"
                >
                  <i class="fa-solid fa-trash"></i>
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getClassmates, deleteClassmate } from '@/services/classmate.service';

export default {
  name: 'Classmates',
  data() {
    return {
      classmates: [],
    };
  },
  async mounted() {
    this.getClassmates();
  },

  methods: {
    async getClassmates() {
      this.classmates = await getClassmates();
    },
    async deleteClassmate(classmateId) {
      await deleteClassmate(classmateId);
      this.getClassmates();
    },

    openCreateClassmate() {
      this.$router.push('/classmates/create');
    },
    openViewClassmate(classmateId) {
      this.$router.push(`/classmates/${classmateId}`);
    },
  },
};
</script>
