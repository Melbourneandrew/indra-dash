<template>
  <div class="activity-report">
    <div class="back-button-row">
      <v-icon
        icon="mdi-arrow-left"
        @click="$emit('back')"
      ></v-icon>
    </div>
    <v-tabs v-model="tab" background-color="primary">
      <v-tab value="one">Job Info</v-tab>
      <v-tab value="two">Activity Report</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="one">
        <v-table>
          <tbody>
            <tr
              v-for="(info, label, index) in propertyInfo"
              :key="index"
            >
              <td>{{ label }}</td>
              <td>{{ info }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
      <v-window-item value="two">
        <h2>Job Date: {{ selectedJob.date }}</h2>
        <v-table>
          <thead>
            <tr>
              <th class="text-left eqmt-col">Equipment</th>
              <th class="text-left">Cost per hour</th>
              <th class="text-left">Budgeted minutes</th>
              <th class="text-left">Actual minutes</th>
              <th class="text-left">Budgeted Cost</th>
              <th class="text-left">Actual Cost</th>
              <th class="text-left">Variance in minutes</th>
              <th class="text-left">Dollar variance</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in report" :key="index">
              <td class="eqmt-col">{{ item.name }}</td>
              <td>{{ formatter.format(item.costPerHour) }}</td>
              <td>{{ item.budgetedMinutes }}</td>
              <td
                :class="{
                  green:
                    item.actualMinutes < item.budgetedMinutes,
                  red:
                    item.actualMinutes > item.budgetedMinutes,
                }"
              >
                {{ item.actualMinutes }}
              </td>
              <!-- Budgeted Cost-->
              <td>
                {{
                  formatter.format(
                    item.budgetedMinutes *
                      (item.costPerHour / 60)
                  )
                }}
              </td>
              <!--Actual Cost-->
              <td
                :class="{
                  green:
                    item.actualMinutes < item.budgetedMinutes,
                  red:
                    item.actualMinutes > item.budgetedMinutes,
                }"
              >
                {{
                  formatter.format(
                    item.actualMinutes * (item.costPerHour / 60)
                  )
                }}
              </td>
              <!--Variance in minutes-->
              <td
                :class="{
                  green:
                    item.budgetedMinutes - item.actualMinutes >
                    0,
                  red:
                    item.budgetedMinutes - item.actualMinutes <
                    0,
                }"
              >
                {{ item.budgetedMinutes - item.actualMinutes }}
              </td>
              <!--Dollar variance-->
              <td
                :class="{
                  green:
                    item.actualMinutes *
                      (item.costPerHour / 60) -
                      item.budgetedMinutes *
                        (item.costPerHour / 60) !=
                    0,
                }"
                v-if="
                  item.budgetedMinutes *
                    (item.costPerHour / 60) -
                    item.actualMinutes *
                      (item.costPerHour / 60) >=
                  0
                "
              >
                {{
                  formatter.format(
                    item.budgetedMinutes *
                      (item.costPerHour / 60) -
                      item.actualMinutes *
                        (item.costPerHour / 60)
                  )
                }}
              </td>
              <td v-else class="red">
                ({{
                  formatter.format(
                    item.actualMinutes *
                      (item.costPerHour / 60) -
                      item.budgetedMinutes *
                        (item.costPerHour / 60)
                  )
                }})
              </td>
            </tr>
            <tr>
              <td colspan="5"></td>
              <td>Total:</td>
              <td
                :class="{
                  red: minutesVarianceTotal < 0,
                  green: minutesVarianceTotal > 0,
                }"
              >
                {{ minutesVarianceTotal }}
              </td>
              <td
                v-if="dollarVarianceTotal >= 0"
                :class="{
                  green: dollarVarianceTotal > 0,
                }"
              >
                ${{ dollarVarianceTotal }}
              </td>
              <td v-else class="red">
                ({{ formatter.format(dollarVarianceTotal) }})
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const tab = ref();
const props = defineProps({
  selectedJob: {
    type: Object,
    default: {},
  },
  propertyInfo: {
    type: Object,
    default: {},
  },
});
const selectedJob = computed(() => props.selectedJob);
watch(selectedJob, () => {
  console.log(selectedJob.value);
});
const propertyInfo = computed(() => props.propertyInfo);

const report = computed(() => props.selectedJob.report);

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const dollarVarianceTotal = report.value.reduce(
  (total, item) => {
    return (
      total +
      (item.budgetedMinutes * (item.costPerHour / 60) -
        item.actualMinutes * (item.costPerHour / 60))
    );
  },
  0
);

const minutesVarianceTotal = report.value.reduce(
  (total, item) => {
    return total + (item.budgetedMinutes - item.actualMinutes);
  },
  0
);
</script>
<style scoped>
.back-button-row {
  width: 100%;
  height: fit-content;
  padding: 5px;
  padding-left: 10px;
}
.activity-report {
  width: 100%;
  height: fit-content;
}
th {
  font-size: 18px !important;
  text-align: left !important;
  padding-bottom: 5px !important;
  padding-top: 5px !important;
}
td {
  font-size: 17px !important;
  text-align: right;
  padding-bottom: 5px !important;
  padding-top: 5px !important;
  padding-right: 30px !important;
}
.eqmt-col {
  width: 200px;
  padding-right: 0px !important;
  text-align: left;
}
.green {
  color: green;
}
.red {
  color: crimson;
}
h2 {
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 20px;
  text-decoration: underline;
}
</style>
