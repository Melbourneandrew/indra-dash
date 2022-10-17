<template>
  <div class="menu">
    <v-card class="menu-card">
      <v-card-title class="rp-title"
        >Robotic Potential</v-card-title
      >
      <div class="divider"></div>
      <div class="rp-subtitle">
        Select Robotic Mowing Percentage
      </div>
      <div class="slider">
        <v-slider
          v-model="roboticMowingPercent"
          color="orange"
          label="color"
          style="padding-top: 10px"
        ></v-slider>
        <div class="slider-value">
          {{ Math.round(roboticMowingPercent) }}%
        </div>
      </div>
      <ul class="reporting">
        <li class="reporting-item">
          Potential Increase in buisness: 70%
        </li>
        <li class="reporting-item">
          Net Increase in customers: 350
        </li>
      </ul>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title class="reporting-item"
            >Net Increase in Revenue:
            $125,000</v-expansion-panel-title
          >
          <v-expansion-panel-text>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left"></th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Customers</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Total Workers on crews</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Total Customers</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Total Customers</td>
                  <td>500</td>
                </tr>
              </tbody>
            </v-table>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const roboticMowingPercent = ref(0);

const props = defineProps({
  client: {
    type: Object,
    default: null,
  },
});

const clientSelected = computed(() => props.client);
watch(clientSelected, () => console.log(clientSelected.value));
</script>
<style scoped>
.menu {
  width: 80vw;
  min-width: 650px;
  height: 100vh;
  padding: 15px;
  display: flex;
}
.menu-card {
  width: 100%;
  height: fit-content;
  border-radius: 5px;
}
.rp-title {
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
}
.divider {
  width: 98%;
  height: 1px;
  margin: auto;
  background-color: rgba(128, 128, 128, 0.465);
}
.rp-subtitle {
  margin: 20px;
  margin-bottom: 0px;
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
}
.slider {
  width: 700px;
  display: flex;
  padding: 20px;
  height: 94px;
}
.slider-value {
  margin-left: 10px;
  font-size: 30px;
  font-weight: bold;
  color: orange;
}

.reporting {
  padding: 30px;
  padding-left: 50px;
}
.reporting-item {
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
}
</style>
