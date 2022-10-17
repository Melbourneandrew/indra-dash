<template>
  <div class="robo-calc">
    <v-card class="calc-card">
      <v-card-title class="rc-title"
        >Robotic Potential</v-card-title
      >
      <div class="divider"></div>
      <!-- INTRO BLURB -->
      <ul class="rc-subtitle-list">
        <li class="rc-subtitle-item">
          Could you grow your business if you could hire more
          workers?
        </li>
        <li class="rc-subtitle-item">
          Have you considered adding robot mowers to your crews?
        </li>
        <li class="rc-subtitle-item">
          Our Robotics calculator helps you visualize how much
          more you can grow by using robot mowers.
        </li>
      </ul>
      <!-- RADIO BUTTONS -->
      <v-radio-group
        inline
        class="radio-select"
        v-model="clientTypeRadio"
      >
        <v-radio
          label="Residential"
          value="Residential"
          color="orange"
          class="radio-item r1"
        ></v-radio>
        <v-radio
          label="Commercial"
          value="Commercial"
          color="orange"
          class="radio-item r2"
        ></v-radio>
      </v-radio-group>
      <!-- CUSTOMER AMMOUNT SLIDER -->
      <div class="customer-slider-labels">
        <div class="slider-label">Small</div>
        <div class="slider-label">Medium</div>
        <div class="slider-label">Large</div>
      </div>
      <div class="slider">
        <v-slider
          :max="2"
          step="1"
          show-ticks="always"
          tick-size="10"
          color="orange"
          track-size="6"
          thumb-size="23"
          v-model="clientSize"
        ></v-slider>
      </div>
      <div class="customer-slider-labels bottom">
        <div class="slider-label">10-100 Customers</div>
        <div class="slider-label">101-500 Customers</div>
        <div class="slider-label">> 500 Customers</div>
      </div>
      <!-- WORKERS AMMOUNT SLIDER -->
      <div class="workers-slider-label">
        Total workers on crews:
        {{ Math.round(numberOfWorkers) }}
      </div>
      <div class="slider middle-slider">
        <v-slider
          color="orange"
          track-size="6"
          thumb-size="23"
          v-model="numberOfWorkers"
          min="2"
          max="100"
        ></v-slider>
      </div>
      <!-- MOWING PERCENT SLIDER -->
      <div class="mowing-slider-labels">
        <div class="slider-label mowing-top">
          {{ Math.round(workerSplit) }}%
        </div>
        <div class="slider-label mowing-top">
          {{ 100 - Math.round(workerSplit) }}%
        </div>
      </div>
      <div class="slider">
        <v-slider
          color="orange"
          track-size="6"
          thumb-size="23"
          v-model="workerSplit"
        ></v-slider>
      </div>
      <div class="mowing-slider-labels bottom">
        <div class="slider-label mowing">Mowing Activity</div>
        <div class="slider-label mowing">
          Non-Mowing Activity
        </div>
      </div>
      <!-- MOWING PERCENT SLIDER -->
      <div class="mowing-slider-labels">
        <div class="slider-label mowing-top">
          {{ Math.round(mowingSplit) }}%
        </div>
        <div class="slider-label mowing-top">
          {{ 100 - Math.round(mowingSplit) }}%
        </div>
      </div>
      <div class="slider">
        <v-slider
          color="orange"
          track-size="6"
          thumb-size="23"
          v-model="mowingSplit"
        ></v-slider>
      </div>
      <div class="mowing-slider-labels bottom">
        <div class="slider-label mowing">Robot Mowing</div>
        <div class="slider-label mowing">Human Mowing</div>
      </div>
      <!-- CALCULATIONS -->
      <v-expansion-panels class="calculations-panel">
        <v-expansion-panel>
          <v-expansion-panel-title
            class="calculations-title calculations-panel"
          >
            <ul class="calculation-main-list">
              <li class="calculation-item-main">
                <div class="label">
                  Potential increase in business:
                </div>
                <div class="number">{{percentIncreaseCustomers.toFixed(2)}}%</div>
              </li>
              <li class="calculation-item-main">
                <div class="label">
                  Potential increase in customers:
                </div>
                <div class="number">{{Math.round(estIncreaseInCustomers).toLocaleString()}}</div>
              </li>
              <li class="calculation-item-main">
                <div class="label">
                  Potential increase in revenue:
                </div>
                <div class="number">${{netIncreaseRevenue.toLocaleString()}}</div>
              </li>
            </ul>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <ul class="calculation-main-list">
              <li class="calculation-item-main">
                <div class="label">Total customers:</div>
                <div class="number">{{ customers }}</div>
              </li>
              <li class="calculation-item-main">
                <div class="label">Average property sq ft:</div>
                <div class="number">
                  {{ avgPropertySqft.toLocaleString() }}
                </div>
              </li>
              <li class="calculation-item-main">
                <div class="label">Total Property sq ft:</div>
                <div class="number">
                  {{ totalPropertySqft.toLocaleString() }}
                </div>
              </li>
              <!-- MOWER BREAKDOWN -->
              <li
                class="calculation-item-main"
              >
                <v-expansion-panels class="calculations-panel">
                  <v-expansion-panel>
                    <v-expansion-panel-title
                      class="calculations-title calculations-panel"
                    >
                      <ul class="calculation-main-list sublist">
                        <li class="calculation-item-main">
                          <div class="label">
                            Estimated Robots Required:
                          </div>
                          <div class="number">
                            {{
                              estimatedRobotsRequired
                            }}
                          </div>
                        </li>
                      </ul>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <ul v-if="clientTypeRadio == 'Commercial'" class="calculation-main-list">
                        <li class="calculation-item-main">
                          <div class="label">
                            Husqvarna 430XH:
                          </div>
                          <div class="number">
                            {{
                              customers *
                              (Math.round(mowingSplit) / 100)
                            }}
                          </div>
                        </li>
                        <li class="calculation-item-main">
                          <div class="label">
                            Husqvarna 450XH:
                          </div>
                          <div class="number">
                            {{
                              customers *
                              (Math.round(mowingSplit) / 100)
                            }}
                          </div>
                        </li>
                      </ul>
                      <ul v-if="clientTypeRadio == 'Residential'" class="calculation-main-list">
                        <li class="calculation-item-main">
                          <div class="label">
                            Husqvarna 315X:
                          </div>
                          <div class="number">
                            {{
                              estimatedRobotsRequired
                            }}
                          </div>
                        </li>
                      </ul>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </li>
              <li
                class="calculation-item-main"
              >
                <v-expansion-panels class="calculations-panel">
                  <v-expansion-panel>
                    <v-expansion-panel-title
                      class="calculations-title calculations-panel"
                    >
                      <ul class="calculation-main-list">
                        <li class="calculation-item-main">
                          <div class="label">
                            Estimated Robots Monthly Cost:
                          </div>
                          <div class="number">
                            ${{
                              estimatedMonthlyRobotCost.toLocaleString()
                            }}
                          </div>
                        </li>
                      </ul>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <ul v-if="clientTypeRadio == 'Commercial'" class="calculation-main-list">
                        <li class="calculation-item-main">
                          <div class="label">
                            Husqvarna 430XH:
                          </div>
                          <div class="number">
                            ${{
                              estimatedMonthlyCostHusq430XH.toLocaleString()
                            }}
                          </div>
                        </li>
                        <li class="calculation-item-main">
                          <div class="label">
                            Husqvarna 450XH:
                          </div>
                          <div class="number">
                            ${{
                              estimatedMonthlyCostHusq450XH.toLocaleString()
                            }}
                          </div>
                        </li>
                      </ul>
                      <ul v-if="clientTypeRadio == 'Residential'" class="calculation-main-list">
                        <li class="calculation-item-main">
                          <div class="label">
                            Husqvarna 315X:
                          </div>
                          <div class="number">
                            ${{
                              estimatedMonthlyCostHusq315X.toLocaleString()
                            }}
                          </div>
                        </li>
                      </ul>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </li>
              <li class="calculation-item-main">
                <div class="label">Estimated yearly cost:</div>
                <div class="number">${{(estimatedMonthlyRobotCost * 12).toLocaleString()}}</div>
              </li>
              <li class="calculation-item-main">
                <div class="label">
                  Average yearly revenue/customer:
                </div>
                <div class="number">${{avgRevPerCustomer.toLocaleString()}}</div>
              </li>
              <li class="calculation-item-main">
                <div class="label">
                  Estimated increase in customers:
                </div>
                <div class="number">{{Math.round(estIncreaseInCustomers).toLocaleString()}}</div>
              </li>
              <li class="calculation-item-main">
                <div class="label">
                  Estimated yearly increase in revenue:
                </div>
                <div class="number">${{estYearlyIncreaseInRevenue.toLocaleString()}}</div>
              </li>
              <li class="calculation-item-main">
                <div class="label">Overhead factor:</div>
                <div class="number">${{overheadFactor.toLocaleString()}}</div>
              </li>
              <div class="calc-divider"></div>
              <li class="calculation-item-main">
                <div class="label">
                  Net increase in revenue:
                </div>
                <div class="number">${{netIncreaseRevenue.toLocaleString()}}</div>
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

//change slider labels for commercial / residential

const clientTypeRadio = ref("Residential");
const clientSize = ref(1);
const mowingSplit = ref(50);
const workerSplit = ref(40);
const numberOfWorkers = ref(10);
watch([clientTypeRadio, clientSize], () => {
  {
    if (clientTypeRadio.value == "Residential") {
      switch (clientSize.value) {
        case 0:
          return (numberOfWorkers.value = 2);
        case 1:
          return (numberOfWorkers.value = 10);
        case 2:
          return (numberOfWorkers.value = 20);
      }
    }
    if (clientTypeRadio.value == "Commercial") {
      switch (clientSize.value) {
        case 0:
          return (numberOfWorkers.value = 4);
        case 1:
          return (numberOfWorkers.value = 20);
        case 2:
          return (numberOfWorkers.value = 100);
      }
    }
  }
});
const customers = computed(() => {
  switch (clientSize.value) {
    case 0:
      return 100;
    case 1:
      return 500;
    case 2:
      return 1000;
  }
});
const averageTurfSize = computed(() => {
  if (clientTypeRadio.value == "Residential") return 10000;
  if (clientTypeRadio.value == "Commercial") return 87000;
});
const avgRevPerCustomer = computed(()=>{
  if(clientTypeRadio.value == 'Residential') return 3000;
  if(clientTypeRadio.value == 'Commercial') return 25000;
});
const avgPropertySqft = computed(() => {
  if (clientTypeRadio.value == "Residential") return 10000;
  if (clientTypeRadio.value == "Commercial") return 80000;
});
const totalPropertySqft = computed(() => {
  return avgPropertySqft.value * customers.value;
});
const estimatedRobotsRequired = computed(() => {
  if (clientTypeRadio.value == "Commercial")
    return 2 * customers.value * (Math.round(mowingSplit.value) / 100);
  if (clientTypeRadio.value == "Residential")
    return customers.value * (Math.round(mowingSplit.value) / 100);
});
const estimatedMonthlyCostHusq430XH = computed(() => {
  return Math.round(
    customers.value * (Math.round(mowingSplit.value) / 100) * 73.8
  );
});
const estimatedMonthlyCostHusq450XH = computed(() => {
  return Math.round(
    customers.value * (Math.round(mowingSplit.value) / 100) * 95.99
  );
});
const estimatedMonthlyCostHusq315X = computed(() => {
  return Math.round(
    customers.value * (Math.round(mowingSplit.value) / 100) * 45.34
  );
});
const estimatedMonthlyRobotCost = computed(() => {
  if (clientTypeRadio.value == "Commercial") {
    return (
      estimatedMonthlyCostHusq430XH.value +
      estimatedMonthlyCostHusq450XH.value
    );
  }
  if (clientTypeRadio.value == "Residential") {
    return estimatedMonthlyCostHusq315X.value;
  }
});
const mowingWorkers = computed(() => Math.round(numberOfWorkers.value) * (Math.round(workerSplit.value)/100))
const nonMowingWorkers = computed(() => Math.round(numberOfWorkers.value) - mowingWorkers.value)

const percentIncreaseCustomers = computed(()=>{
  return (customers.value / nonMowingWorkers.value) * (mowingWorkers.value / customers.value) * 100;
})
const estIncreaseInCustomers = computed(()=>{
  return customers.value * (percentIncreaseCustomers.value / 100);
})
const estYearlyIncreaseInRevenue = computed(() => {
  return avgRevPerCustomer.value * (Math.round(estIncreaseInCustomers.value))
})
const overheadFactor = computed(()=>{
  return Math.round(estimatedRobotsRequired.value / 100 * 50000)
})
const netIncreaseRevenue = computed(()=>{
  return estYearlyIncreaseInRevenue.value - overheadFactor.value - (estimatedMonthlyRobotCost.value * 12);
})
</script>
<style scoped>
.robo-calc {
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.calc-card {
  width: 900px;
  padding: 10px;
  height: fit-content;
  border-radius: 5px;
}
.rc-title {
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
.calc-divider {
  width: 90%;
  margin-bottom: 10px;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.465);
}

.rc-subtitle-list {
  padding: 30px;
  padding-left: 35px;
}
.rc-subtitle-item {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 23px;
}

.radio-select {
  justify-content: center;
  align-items: center;
  opacity: 1 !important;
  width: fit-content;
  margin: auto;
}
.radio-item {
  color: white;
  font-weight: bold;
  font-size: 20px;
  opacity: 1 !important;
}
.r1 {
  margin-right: 40px;
}
.r2 {
  margin-left: 40px;
}

.slider {
  padding-inline: 50px;
}
.customer-slider-labels {
  width: 100%;
  display: inline-grid;
  column-gap: 200px;
  grid-template-columns: auto auto auto;
}
.customer-slider-labels.bottom {
  margin-bottom: 70px;
}
.slider-label {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
.slider-label.mowing {
  font-size: 23px;
}
.slider-label.mowing-top {
  font-size: 26px;
}
.mowing-slider-labels {
  width: 100%;
  display: inline-grid;
  grid-template-columns: auto auto;
  /* justify-content: space-evenly; */
}
.mowing-slider-labels.bottom {
  margin-bottom: 50px;
  /* justify-content: space-evenly; */
}
.calculations-panel {
  border-width: 1px !important;
  border-color: rgb(255, 255, 255);
  border-style: solid;
  border-radius: 10px !important;
  border-top-left-radius: 10px !important;
}
.calculations-title {
  flex-direction: column;
}
.calculation-item-main {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  width: 90%;
  display: flex;
}
.calculation-item-main .label {
  align-self: left;
}
.calculation-item-main .number {
  margin-left: auto;
  text-align: right;
}
.calculation-main-list {
  padding-left: 30px;
  width: 100%;
}
.sublist{
  padding-left: 0px !important;
}

.workers-slider-label {
  font-size: 22px;
  font-weight: bold;
  margin-left: 55px;
  margin-bottom: 15px;
}
.middle-slider {
  margin-bottom: 40px;
}
</style>
