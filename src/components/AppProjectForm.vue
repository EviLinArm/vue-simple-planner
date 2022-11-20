<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input v-model="title" type="text">
    <label>Details</label>
    <textarea v-model="details"></textarea>
    <div>
      <button :disabled="buttonDis">
        {{ buttonText }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'appProjectForm',
  data() {
    return {
      title: this.project.title,
      details: this.project.details,
      buttonText: this.projectButton,
      buttonDis: false
    }
  },
  props: {
    project: {
      default: '',
      required: false
    },
    projectButton: {
      type: String,
      default: 'Create project',
      required: false,
    },
  },
  methods: {
    async handleSubmit() {
      this.buttonDis = true;
      if (this.project.id) {
        const data = {
          title: this.title,
          details: this.details,
          selected: this.project.selected
        }
        await fetch(`http://localhost:3000/projects/${this.project.id}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        this.$router.push('/')
            // .then((res) => res.json())
            // .then((data) => console.log(data))
      } else {
        const data = {
          title: this.title,
          details: this.details,
          selected: false
        }
        await fetch('http://localhost:3000/projects', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
      }
      this.buttonDis = false
      this.title = ''
      this.details = ''
    }
  },
  watch: {
    project() {
      if (this.project !== '') {
        this.title = this.project.title
        this.details = this.project.details
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  background: #fff;
  border-radius: 5px;
}
input, textarea {
  margin-bottom: 20px;
  color: #555;
  font-size: 16px;
}
textarea {
  border-color: #ddd;
  max-width: 100%;
  min-width: 100%;
  min-height: 100px;
  max-height: 200px;
}
label, input {
  border: none;
  color: #555;
}
label {
  color: #555;
  font-size: 18px;
  margin-bottom: 10px;
}
input {
  border-bottom: 1px solid #ddd;
  height: 30px;
}
div {
  align-self: center;
}
button {
  background: teal;
  font-size: 18px;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}
button[disabled] {
  background-color: #555;
  opacity: 0.7;
  cursor: default;
}
</style>