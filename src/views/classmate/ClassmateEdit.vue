<template>
  <div class="classmate-create">
    <div class="jumbotron m-3">
      <h1 class="my-3">Editar o Colega {{ classmate.name }}</h1>
      <ClassmateForm 
        :initial-values="classmate"
        @onFormSubmit="editClassmate"
        />
    </div>
  </div>
</template>

<script>
import ClassmateForm from '@/components/classmate/ClassmateForm.vue';
import { getRequest, putRequest } from '@/services/apiService';

export default {
  name: 'ClassmateCreate',
  components: { ClassmateForm },
  data() {
    return {
      classmate: {},
    };
  },
  mounted() {
    this.getClassmateInfo();
  },
  methods: {
    async getClassmateInfo() {
      this.classmate = await getRequest(`classmates/${this.$route.params.id}`);
    },
    async editClassmate(classmateInfos) {
      await putRequest(`/classmates/${classmateInfos.id}`, { classmate: classmateInfos });
      this.$router.push('/classmates');
    },
  }
};
</script>
