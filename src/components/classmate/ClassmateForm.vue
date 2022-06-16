<template>
  <form 
    @submit.prevent="submitForm"
  >
    <div class="form-group">
      <label>Nome</label>
      <input 
        v-model="classmate.name"
        type="text"
        class="form-control"
      />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input 
        v-model="classmate.email"
        type="email"
        class="form-control"
      />
    </div>

    <div class="form-group">
      <label>Idade</label>
      <input 
        v-model="classmate.age"
        type="number"
        class="form-control"
      />
    </div>

    <div class="form-group">
      <label>Matrícula</label>
      <input 
        v-model="classmate.registration_number"
        type="text"
        class="form-control"
      />
    </div>

    <button 
      type="submit" 
      class="btn btn-primary mt-3"
    >
      Enviar
    </button>
  </form>
</template>

<script>
export default {
  name: 'ClassmateForm',
  props: {
    initialValues: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      classmate: {},
    };
  },
  mounted() {
    if (this.initialValues) {
      this.classmate = { ...this.initialValues };
    }
  },
  methods: {
    submitForm() {
      this.$emit('onFormSubmit', this.classmate);

      // Reseta o colega :)
      this.classmate = {};
    }
  }
};
</script>

<style>

</style>
