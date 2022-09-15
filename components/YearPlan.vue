<template>
  <div class="year-plan">
    <v-table>
      <thead>
        <col />
        <colgroup span="2"></colgroup>
        <colgroup span="2"></colgroup>
        <tr>
          <td rowspan="2"></td>
          <th colspan="2" scope="colgroup">Janurary</th>
          <th colspan="2" scope="colgroup">Feburary</th>
          <th colspan="2" scope="colgroup">March</th>
          <th colspan="2" scope="colgroup">April</th>
          <th colspan="2" scope="colgroup">May</th>
          <th colspan="2" scope="colgroup">June</th>
          <th colspan="2" scope="colgroup">July</th>
          <th colspan="2" scope="colgroup">August</th>
          <th colspan="2" scope="colgroup">September</th>
          <th colspan="2" scope="colgroup">October</th>
          <th colspan="2" scope="colgroup">November</th>
          <th colspan="2" scope="colgroup">December</th>
        </tr>
        <tr>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
          <th scope="col">Budget</th>
          <th scope="col">Actual</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(activity, index) in activities"
          :key="index"
        >
          <th scope="row">{{ activity.name }}</th>
          <td
            v-for="(month, index) in activity.monthLogs
              .slice(1)
              .flat(1)"
            :class="{
              greycell: index % 2 != 0,
              red:
                index % 2 != 0 &&
                activity.monthLogs.slice(1).flat(1)[index] >
                  activity.monthLogs.slice(1).flat(1)[
                    index - 1
                  ],
              green:
                index % 2 != 0 &&
                activity.monthLogs.slice(1).flat(1)[index] <
                  activity.monthLogs.slice(1).flat(1)[
                    index - 1
                  ],
            }"
          >
            {{ month }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
const activities = [
  {
    name: "Mowing",
    monthLogs: [
      [],
      [1, 2],
      [1, 1],
      [2, 4],
      [5, 4],
      [5, 4],
      [4, 3],
      [5, 6],
      [6, 6],
      [5, 5],
      [4, 3],
      [1, 1],
      [1, 1],
    ],
  },
  {
    name: "Bed Weeding",
    monthLogs: [
      [],
      [1, 2],
      [1, 1],
      [2, 4],
      [5, 4],
      [5, 4],
      [4, 3],
      [5, 6],
      [6, 6],
      [5, 5],
      [4, 3],
      [1, 1],
      [1, 1],
    ],
  },
  {
    name: "Leaf Cleanup",
    monthLogs: [
      [],
      [1, 2],
      [1, 1],
      [2, 2],
      [2, 2],
      [2, 1],
      [2, 2],
      [2, 2],
      [2, 1],
      [3, 4],
      [4, 4],
      [4, 4],
      [2, 1],
    ],
  },
  {
    name: "Bush and Ornimental Trimming",
    monthLogs: [
      [],
      [1, 2],
      [1, 1],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
  },
  {
    name: "Tree Trimming",
    monthLogs: [
      [],
      [1, 2],
      [1, 1],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
  },
  {
    name: "Fert. and Weed Control",
    monthLogs: [
      [],
      [1, 2],
      [1, 1],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
  },
  {
    name: "Mulch",
    monthLogs: [
      [],
      [1, 2],
      [1, 1],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
  },
  {
    name: "Hard Surface Spraying",
    monthLogs: [
      [],
      [1, 2],
      [1, 1],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
  },
  {
    name: "Flowers",
    monthLogs: [
      [],
      [1, 2],
      [1, 1],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
  },
];
</script>
<style scoped>
.greycell {
  background-color: rgb(51, 51, 51);
}
.red{
  color: red;
}
.green{
  color: green;
}
</style>
