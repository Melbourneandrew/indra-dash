<template>
  <div class="client-menu">
    <h1 class="client-title">Clients</h1>
    <div class="actions-row">
      <div class="search-bar">
        <v-icon size="small" color="white">mdi-magnify</v-icon>
        <input
          type="text"
          placeholder="Search"
          class="search-input"
        />
      </div>
      <v-btn
        size="10"
        height="35"
        width="35"
        elevation="0"
        icon="mdi-plus"
        class="add-btn"
      ></v-btn>
    </div>
    <v-expansion-panels class="panels" variant="accordion">
      <v-expansion-panel
        :rounded="true"
        elevation="0"
        class="panel"
        v-for="(client, index) in clients"
        :key="index"
      >
        <v-expansion-panel-title class="panel-title">
          {{client.name}}
        </v-expansion-panel-title>
        <v-expansion-panel-text class="panel-content">
          <h2 class="properties-title">Properties</h2>
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
            @click="$emit('select', [i,j])"
              class="subpanel"
              elevation="8"
              v-for="(property, index) in client.properties"
              :key="index"
            >
              <v-expansion-panel-title
                expand-icon="mdi-arrow-right"
                collapse-icon="mdi-arrow-right"
                class="subpanel-title"
              >
                {{property}}
              </v-expansion-panel-title>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
    const clients = [
        {
            name: "Shady Oaks Neighborhood",
            properties: [
                "1700 Shady Oaks Dr",
                "1444 Dark Oaks Dr",
                "1125 Smelly Ln",
                "443 W Dove Ct"
            ]
        },
        {
            name:"Carroll Office Park",
            properties:[
                "Suite 111A",
                "Suite 111B",
                "Chem Lab West"
            ]
        },
        {
            name:"Client 3",
            properties:[
                "Property 1",
                "Property 2",
                "Property 3",
            ]
        }
    ]
</script>
<style scoped>
.client-menu {
  width: 20vw;
  min-width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(28, 30, 33);
}
.client-title {
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 20px;
}
.actions-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-left: 30px;
  padding-right: 25px;
  margin-bottom: 15px;
}
.search-bar {
  width: 280px;
  height: 35px;
  border-radius: 50px;
  background-color: rgb(45, 45, 45);
  padding-left: 15px;
  margin-right: 10px;
  display: flex;
  align-items: center;
}
.search-input {
  background-color: transparent;
  width: 215px;
  height: 20px;
  margin-left: 5px;
}
.add-btn {
  margin-left: auto;
}
.search-input:focus {
  outline: none !important;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: white;
}
.properties-title {
  margin-bottom: 8px;
}

.panels {
  padding: 5px;
  padding-inline: 10px;
}
.panel {
  background-color: rgb(28, 30, 33);
}
.panel-title {
  font-size: 18px;
  height: 60px;
  background-color: rgb(28, 30, 33);
}
.panel-content {
  background-color: rgb(28, 30, 33);
}
.panel-title:hover {
  border-radius: 15px;
}
.subpanel-title {
  height: 60px;
  background-color: rgb(28, 30, 33);
}
.subpanel {
  background-color: rgb(28, 30, 33);
  margin-bottom: 5px;
}
.subpanel::after {
  border-style: hidden;
}
.subpanel::before {
  border-style: hidden;
}
</style>
