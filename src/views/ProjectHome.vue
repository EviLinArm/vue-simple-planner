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
      projects: [
        {title: 'Project 1', id: 1, details: 'Project One - details', selected: true},
        {title: 'Project 2', id: 2, details: 'Project Two - details', selected: false},
        {title: 'Project 3', id: 3, details: 'Project Three - details', selected: true},
      ],
      filter: null
    }
  },
  methods: {
    isSelected(project) {
      project.selected = !project.selected
    },
    deleteHandler(id) {
      this.projects = this.projects.filter(project => project.id !== id)
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
