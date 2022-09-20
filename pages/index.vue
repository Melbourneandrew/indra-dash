<template>
  <div class="home">
    <clients-menu @select="selectProperty"></clients-menu>
    <property-menu :property="selectedProperty"></property-menu>
  </div>
</template>

<script setup>
import ClientsMenu from "~~/components/ClientsMenu.vue";
import PropertyMenu from "~~/components/PropertyMenu.vue";
const selectedProperty = useState('selectedProperty')
function selectProperty(property) {
  selectedProperty.value = property;
}
</script>
<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
</style>
