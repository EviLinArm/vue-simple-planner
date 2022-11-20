<template>
  <app-project-form :project="project" :projectButton="'Update project'"/>
</template>

<script>
import appProjectForm from "../components/AppProjectForm.vue";
export default {
  components: {appProjectForm},
  data() {
    return {
      id: this.$route.params.id,
      project: {}
    }
  },
  mounted() {
    fetch(`http://localhost:3000/projects/${this.id}`)
        .then(res => res.json())
        .then(data => this.project = data)
        .catch(err => console.log(err))
  },
}
</script>