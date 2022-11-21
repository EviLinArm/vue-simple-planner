<template>
  <app-filter-nav @filterHandler="filterHandler" :filter="filter"/>
  <div>
    <app-single-project v-for="project in isFiltered" :key="project.id" :project="project" @isSelected="isSelected" @deleteHandler="deleteHandler"/>
  </div>
</template>

<script>
import AppFilterNav from "../components/AppFilterNav.vue";
import AppSingleProject from "../components/AppSingleProject.vue";
export default {
  components: {AppSingleProject, AppFilterNav},
  data () {
    return {
      projects: [],
      filter: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
        .then((res) => res.json())
        .then((data) => this.projects = data)
        .catch(e => console.log(e, 'Run npx json-server data/db.json'))
  },
  methods: {
    isSelected(project) {
      project.selected = !project.selected
      if (project.id) {
        const data = {
          ...project,
          selected: project.selected
        }
        delete data.id
        fetch(`http://localhost:3000/projects/${project.id}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
      }
    },
    deleteHandler(id) {
      this.projects = this.projects.filter(project => project.id !== id)
      if (id) {
        fetch(`http://localhost:3000/projects/${id}`, {
          method: 'DELETE',
        })
      }
    },
    filterHandler(status) {
      this.filter = status
    }
  },
  computed: {
    isFiltered() {
      if (this.filter === null) {
        return this.projects
      }
      return this.projects.filter(project => project.selected !== this.filter)
    },
  },
}
</script>

<style scoped>
  .project {
    margin-bottom: 15px;
  }
  .project:last-child {
    margin-bottom: 0;
  }
</style>
