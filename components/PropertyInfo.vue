<template>
  <div class="property-info">
    <v-table>
      <tbody>
        <tr v-for="(info, label, index) in propertyInfo" :key="index">
          <td>{{label}}</td>
          <td>{{info}}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
const propertyInfo = {
  "Client Name": "Shady Oaks Neighborhood",
  "Property Address": "1700 Shady Oaks Drive",
  "Job Date": "9/1/22 GMT-0500",
  "Service Description":
    "Mowing, grass trimming, edging, hedge trimming, weeding ",
  "Grass lot area": "4.12 acres",
  "Turf area": "0 acres",
  "Job Price": "$280",
  "Visits per year": "36",
  "Yearly gross rev.": "$10,000",
};
</script>
<style scoped></style>
