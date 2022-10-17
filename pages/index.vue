<template>
  <div class="home">
    <clients-menu
      @propertySelected="selectProperty"
    ></clients-menu>
    <property-menu
      v-if="showMenu"
      :property="selectedProperty"
    ></property-menu>
    <h1 class="default-message" v-else>
      Select a property to see reporting
    </h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ClientsMenu from "~~/components/ClientsMenu.vue";
import PropertyMenu from "~~/components/PropertyMenu.vue";
const selectedProperty = useState("selectedProperty");
const selectedClient = useState("selectedClient");

const showMenu = ref(false);
function selectProperty(property) {
  showMenu.value = true;
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
.default-message {
  margin: auto;
  margin-top: 200px;
  color: gray;
}
</style>
