<template>
  <div class="menu">
    <v-card class="menu-card">
      <v-tabs
        v-if="showTabs"
        v-model="tab"
        background-color="primary"
      >
        <v-tab class="tab" value="jobs">Jobs</v-tab>
        <v-tab class="tab" value="year">Year Plan</v-tab>
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="jobs">
            <JobsReport @selected="jobSelected" :jobs="propertySelected.jobs"></JobsReport>
          </v-window-item>
          <v-window-item value="year">
            <YearPlan :plan="propertySelected.plan"/>
          </v-window-item>
          <v-window-item value="one-job">
            <ActivityReport
              :selectedJob="selectedJob"
              :propertyInfo="propertySelected.info"
              @back="activityReportBack"
            />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import JobsReport from "./JobsReport.vue";
import ActivityReport from "./ActivityReport.vue";
import { ref, computed, watch } from "vue";
import YearPlan from "./YearPlan.vue";
const tab = ref();
const showTabs = ref(true);

const props = defineProps({
  property: {
    type: Object,
    default: null,
  },
});
const propertySelected = computed(() => props.property);
watch(propertySelected, ()=>console.log(propertySelected.value))
const selectedJob = ref();
async function jobSelected(job) {
  console.log(job);
  selectedJob.value = job;
  showTabs.value = false;
  tab.value = "one-job";
}
async function activityReportBack() {
  tab.value = "job";
  showTabs.value = true;
}
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
.tab {
  font-weight: bold;
}
h1 {
  margin: auto;
  margin-top: 200px;
  color: gray;
}
</style>
