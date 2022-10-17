<template>
  <div>
    <NavBar :title="navTitle"></NavBar>
    <NuxtPage />
  </div>
</template>
<script setup>
import NavBar from "./components/NavBar.vue";

const data = await $fetch("/api/data");
const state = useState("state", () => data);

const route = useRoute();
const navTitle = useState("nav-title", () => {
  if (route.path == "/")
    return "Robin Activity Dashboard";
  if (route.path == "/RoboticCalculator")
    return "Robin Robotic Calculator";
});
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
/* remove bottom part from slider */
.v-slider .v-input__details{
  display: none;
}
.radio-item .v-label{
  opacity: 1.0;
  font-size: 20px;
  
}
</style>
