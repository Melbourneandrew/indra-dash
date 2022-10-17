<template>
  <div class="navbar">
    <img class="logo" src="/static/robin-logo-orange.png" />
    <h1 class="header">{{props.title}}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ""
  }
})
</script>
<style scoped>
.navbar {
  width: 100vw;
  height: 62px;
  display: flex;
  padding-inline: 45px;
  align-items: center;
  border-bottom: 1px solid rgb(22, 22, 27);
}
.logo {
  width: 30px;
}
.header {
  margin-left: 15px;
  font-size: 18px;
  line-height: 21px;
  color: white;
  font-weight: bold;
}
</style>
