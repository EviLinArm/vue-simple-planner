<template>
  <div>
    <ul>
      <li :class="{selected: filter === null}" @click="this.$emit('filterHandler', null)">View all</li>
      <li :class="{selected: filter === true}" @click="this.$emit('filterHandler', true)">Completed</li>
      <li :class="{selected: filter === false}" @click="this.$emit('filterHandler', false)">Ongoing</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: Boolean,
      default: null,
      required: false
    },
  },
}
</script>

<style scoped>
div {
  padding-bottom: 10px;
}
ul {
  display: flex;
  padding: 0;
}
li {
  margin-right: 20px;
}
li:last-child {
  margin-right: 0;
}
li::marker {
  content: none;
}
li {
  text-decoration: unset;
  color: #9d9d9d;
  font-size: 18px;
  transition: all 0.25s;
  cursor: pointer;
}
li:hover {
  opacity: 0.7;
}
li.selected {
  color: #555;
}
</style>