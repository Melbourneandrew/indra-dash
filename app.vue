<template>
  <div>
    <NavBar></NavBar>
    <NuxtPage />
  </div>
</template>
<script setup>
import NavBar from "./components/NavBar.vue";

const data = await $fetch("/api/data");
const state = useState('state', () => data)
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap");
* {
  font-family: "Open Sans", sans-serif;
}
:root {
  background-color: rgb(31, 33, 38);
  color: rgb(226, 226, 226);
}
</style>
