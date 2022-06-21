<template>
  <div class="classmate-create">
    <div class="jumbotron m-3">
      <h1 class="my-3">Criar um novo Colega</h1>
      <ClassmateForm 
        submit-label="Criar"
        @onFormSubmit="createClassmate"
      />
    </div>
  </div>
</template>

<script>
import { createClassmate } from '@/services/classmate.service';
import ClassmateForm from '@/components/classmate/ClassmateForm.vue';

export default {
  name: 'ClassmateCreate',
  components: { ClassmateForm },
  methods: {
    async createClassmate(classmateInfos) {
      await createClassmate(classmateInfos);
      this.$router.push('/classmates');
    },
  }
};
</script>
