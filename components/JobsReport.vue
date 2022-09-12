<template>
  <div class="jobs-table">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Contract Jobs</th>
          <th class="text-left">Budgeted minutes</th>
          <th class="text-left">Actual minutes</th>
          <th class="text-left">Budgeted Cost</th>
          <th class="text-left">Actual Cost</th>
          <th class="text-left">Variance in minutes</th>
          <th class="text-left">Dollar variance</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(job, index) in jobs"
          :key="index"
          @click="$emit('selected', job)"
        >
          <td>{{ job.date }}</td>
          <td>{{ job.budgetedMinutes }}</td>
          <td>{{ job.actualMinutes }}</td>
          <td>
            {{ formatter.format(job.budgetedCost) }}
          </td>
          <td>
            {{ formatter.format(job.actualCost) }}
          </td>
          <td
            :class="{
              green: job.varianceInMinutes > 0,
              red: job.varianceInMinutes < 0,
            }"
          >
            {{ job.varianceInMinutes }}
          </td>
          <td v-if="job.dollarVariance < 0" class="red">
            ({{ formatter.format(job.dollarVariance) }})
          </td>
          <td
            v-else
            :class="[
              job.dollarVariance == 0 ? 'norm' : 'green',
            ]"
          >
            {{ formatter.format(job.dollarVariance) }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
function logSelected() {
  console.log("selected");
}
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const jobs = [
  {
    date: "9/1/22",
    budgetedMinutes: 250,
    actualMinutes: 317,
    budgetedCost: 90,
    actualCost: 115,
    varianceInMinutes: -67,
    dollarVariance: -25,
  },
  {
    date: "9/8/22",
    budgetedMinutes: 345,
    actualMinutes: 300,
    budgetedCost: 130,
    actualCost: 98,
    varianceInMinutes: 45,
    dollarVariance: 32,
  },
  {
    date: "9/15/22",
    budgetedMinutes: 250,
    actualMinutes: 317,
    budgetedCost: 90,
    actualCost: 115,
    varianceInMinutes: -67,
    dollarVariance: -25,
  },
];
</script>
<style scoped>
th {
  font-size: 18px !important;
  text-align: left !important;
}
td {
  font-size: 16px !important;
  text-align: right;
  padding-right: 50px !important;
}
.green{
  color: green;
}
.red{
  color: red;
}
</style>
