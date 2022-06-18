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
import { getClassmate, editClassmate } from '@/services/classmate.service';
import ClassmateForm from '@/components/classmate/ClassmateForm.vue';

export default {
  name: 'ClassmateCreate',
  components: { ClassmateForm },
  data() {
    return {
      classmate: {},
    };
  },
  async mounted() {
    this.classmate = await getClassmate(this.$route.params.id);
  },
  methods: {
    async editClassmate(classmateInfos) {
      await editClassmate(classmateInfos);
      this.$router.push('/classmates');
    },
  }
};
</script>
