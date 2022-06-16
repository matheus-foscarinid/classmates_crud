<template>
  <div class="classmate-create">
    <div class="jumbotron m-3">
      <h1 class="my-3">Criar um novo Colega</h1>
      <ClassmateForm @onFormSubmit="createClassmate"/>
    </div>
  </div>
</template>

<script>
import ClassmateForm from '@/components/classmate/ClassmateForm.vue';
import { postRequest } from '@/services/apiService';

export default {
  name: 'ClassmateCreate',
  components: { ClassmateForm },
  methods: {
    async createClassmate(classmateInfos) {
      await postRequest('/classmates', { classmate: classmateInfos });
      this.$router.push('/classmates');
    },
  }
};
</script>
