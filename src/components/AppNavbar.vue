<template>
  <div>
    <ul>
      <li>
        <router-link to="/">All projects</router-link>
      </li>
      <li>
        <router-link to="/project/add">Add project</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "appNavbar.vue"
}
</script>

<style scoped>
div {
  padding-bottom: 10px;
}
ul {
  display: flex;
  justify-content: center;
  padding: 0;
}
li {
  padding: 0 20px;
}
li::marker {
  content: none;
}
li a {
  text-decoration: unset;
  color: #555;
  font-size: 20px;
  transition: all 0.25s;
}
li a:hover {
  opacity: 0.7;
}
li a.router-link-active {
  border-bottom: 2px solid teal;
  padding-bottom: 5px;
}
</style>