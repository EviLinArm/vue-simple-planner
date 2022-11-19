<template>
  <div class="project" @click="spoilerHandler">
    <div class="project-color" :class="{selected: project.selected}"></div>
    <div class="project__box">
      <div class="project__content">
        <div class="content-title">{{ project.title }}</div>
        <div class="content__buttons">
          <div class="buttons__button buttons-delete" @click="deleteProject(project.id)"></div>
          <div class="buttons__button buttons-edit" @click="editProject(project.id)"></div>
          <div class="buttons__button buttons-select" :class="{selected: project.selected}" @click.stop="selectProject(project)"></div>
        </div>
      </div>
      <div v-if="this.spoiler" class="project__details">
        {{ project.details }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      spoiler: false,
    }
  },
  methods: {
    selectProject(project) {
      this.$emit('isSelected', project)
    },
    deleteProject(id) {
      this.$emit('deleteHandler', id)
    },
    spoilerHandler() {
      this.spoiler = !this.spoiler
    },
    editProject(id) {
      this.$router.push(`/project/${id}`)
    }
  }
}
</script>

<style scoped>
.project {
  display: flex;
  border-radius: 5px;
  height: 100%;
  background: #fff;
  overflow: hidden;
  transition: box-shadow 0.5s;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.15);
}
.project:hover {
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
}
.project:hover .project__box .project__content .content-title, .project:hover .project__box .project__details {
  opacity: 0.7;
}
.project:hover .project-color {
  opacity: 0.7;
}
.project-color {
  background-color: teal;
  transition: opacity 0.25s;
  width: 1%;
}
.project-color.selected {
  background-color: palevioletred;
}
.project__box {
  display: flex;
  flex-direction: column;
  width: 99%;
}
.project__content, .project__details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
}
.project__details {
  color: #555;
  font-size: 16px;
  transition: opacity 0.25s;
}
.content-title {
  color: #555;
  font-size: 20px;
  transition: opacity 0.25s;
  max-height: 100%;
  overflow: hidden;
}
.content__buttons {
  display: flex;
}
.buttons__button {
  margin-right: 15px;
  cursor: pointer;
}
.buttons__button.selected {
  opacity: 0.7;
}
.buttons__button:last-child {
  margin-right: 0;
}
.buttons-delete {
  background: #152446;
  width: 25px;
  height: 25px;
}
.buttons-edit {
  background: #696930;
  width: 25px;
  height: 25px;
}
.buttons-select {
  background: #984523;
  width: 25px;
  height: 25px;
}

</style>