const activityReport = [
  {
    name: "Mower - 21 inch base",
    costPerHour: 24,
    budgetedMinutes: 40,
    actualMinutes: 60,
    budgetedCost: 16,
    actualCost: 24,
    varianceInMinutes: -20,
    dollarVariance: -8,
  },
  {
    name: "Mower - Zero turn 54 inch base",
    costPerHour: 24,
    budgetedMinutes: 60,
    actualMinutes: 80,
    budgetedCost: 24,
    actualCost: 32,
    varianceInMinutes: -15,
    dollarVariance: -8,
  },
  {
    name: "Grass trimmer",
    costPerHour: 20,
    budgetedMinutes: 30,
    actualMinutes: 45,
    budgetedCost: 10,
    actualCost: 15,
    varianceInMinutes: -15,
    dollarVariance: -5,
  },
  {
    name: "Hedge trimmer",
    costPerHour: 20,
    budgetedMinutes: 30,
    actualMinutes: 15,
    budgetedCost: 10,
    actualCost: 5,
    varianceInMinutes: 15,
    dollarVariance: 5,
  },
  {
    name: "Tree trimmer",
    costPerHour: 20,
    budgetedMinutes: 0,
    actualMinutes: 0,
    budgetedCost: 0,
    actualCost: 0,
    varianceInMinutes: 0,
    dollarVariance: 0,
  },
  {
    name: "Edger",
    costPerHour: 20,
    budgetedMinutes: 20,
    actualMinutes: 22,
    budgetedCost: 6.66,
    actualCost: 7.33,
    varianceInMinutes: -2,
    dollarVariance: 1,
  },
  {
    name: "Blower",
    costPerHour: 20,
    budgetedMinutes: 30,
    actualMinutes: 40,
    budgetedCost: 10,
    actualCost: 13.33,
    varianceInMinutes: -10,
    dollarVariance: -3,
  },
  {
    name: "Spreader",
    costPerHour: 30,
    budgetedMinutes: 0,
    actualMinutes: 0,
    budgetedCost: 0,
    actualCost: 0,
    varianceInMinutes: 0,
    dollarVariance: 0,
  },
  {
    name: "Sprayer",
    costPerHour: 30,
    budgetedMinutes: 0,
    actualMinutes: 0,
    budgetedCost: 0,
    actualCost: 0,
    varianceInMinutes: 0,
    dollarVariance: 0,
  },
  {
    name: "Weeding Bucket",
    costPerHour: 20,
    budgetedMinutes: 40,
    actualMinutes: 55,
    budgetedCost: 13.33,
    actualCost: 18.33,
    varianceInMinutes: -15,
    dollarVariance: -5,
  },
  {
    name: "Shovel",
    costPerHour: 20,
    budgetedMinutes: 0,
    actualMinutes: 0,
    budgetedCost: 0,
    actualCost: 0,
    varianceInMinutes: 0,
    dollarVariance: 0,
  },
  {
    name: "Rake",
    costPerHour: 20,
    budgetedMinutes: 0,
    actualMinutes: 0,
    budgetedCost: 0,
    actualCost: 0,
    varianceInMinutes: 0,
    dollarVariance: 0,
  },
  {
    name: "Pruner",
    costPerHour: 20,
    budgetedMinutes: 0,
    actualMinutes: 0,
    budgetedCost: 0,
    actualCost: 0,
    varianceInMinutes: 0,
    dollarVariance: 0,
  },
];
const jobs = [
  {
    date: "9/1/22",
    budgetedMinutes: 250,
    actualMinutes: 317,
    budgetedCost: 90,
    actualCost: 115,
    varianceInMinutes: -67,
    dollarVariance: -25,
    report: activityReport,
  },
  {
    date: "9/8/22",
    budgetedMinutes: 345,
    actualMinutes: 300,
    budgetedCost: 130,
    actualCost: 98,
    varianceInMinutes: 45,
    dollarVariance: 32,
    report: activityReport,
  },
  {
    date: "9/15/22",
    budgetedMinutes: 250,
    actualMinutes: 317,
    budgetedCost: 90,
    actualCost: 115,
    varianceInMinutes: -67,
    dollarVariance: -25,
    report: activityReport,
  },
];
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
const propertyPlan = [
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
const propertyPlanLoganSheet = [
  {
    name: "Mowing",
    monthLogs: [
      [],
      [1, 2],
      [1, 1],
      [3, 4],
      [3, 4],
      [4, 4],
      [4, 4],
      [4, 4],
      [4, 4],
      [4, 4],
      [4, 3],
      [0, 1],
      [0, 1],
    ],
  },
  {
    name: "Bed Weeding",
    monthLogs: [
      [],
      [1, 1],
      [1, 1],
      [2, 4],
      [2, 4],
      [4, 4],
      [4, 4],
      [4, 4],
      [4, 4],
      [4, 4],
      [4, 3],
      [0, 1],
      [0, 1],
    ],
  },
  {
    name: "Leaf Cleanup",
    monthLogs: [
      [],
      [2, 2],
      [2, 2],
      [1, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [1, 1],
      [2, 2],
      [1, 2],
    ],
  },
  {
    name: "Bush and Ornimental Trimming",
    monthLogs: [
      [],
      [0, 0],
      [0, 0],
      [0, 0],
      [1, 1],
      [0, 1],
      [0, 1],
      [1, 0],
      [1, 1],
      [1, 0],
      [1, 0],
      [1, 1],
      [1, 1],
    ],
  },
  {
    name: "Tree Trimming",
    monthLogs: [
      [],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [1, 1],
      [0, 0],
      [0, 0],
    ],
  },
  {
    name: "Fert. and Weed Control",
    monthLogs: [
      [],
      [1, 1],
      [1, 1],
      [1, 0],
      [0, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 0],
      [0, 0],
    ],
  },
  {
    name: "Mulch",
    monthLogs: [
      [],
      [0, 0],
      [0, 0],
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ],
  },
  {
    name: "Hard Surface Spraying",
    monthLogs: [
      [],
      [0, 0],
      [0, 0],
      [0, 0],
      [1, 1],
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1],
      [1, 1],
      [1, 1],
      [0, 0],
      [0, 0],
    ],
  },
  {
    name: "Flowers",
    monthLogs: [
      [],
      [0, 0],
      [0, 0],
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 1],
      [0, 0],
      [0, 0],
    ],
  },
];
const propertyInfoLoganSheet = {
  "Client Name": "Davey Tree Plano Property",
  "Property Address":
    "880 N Dorothy Dr, Unit 814, Richardson, TX 75081",
  "Job Date": "10/12/2022",
  "Service Description":
    "Mowing, grass trimming, edging, hedge trimming, weeding ",
  "Grass lot area": "5 acres",
  "Turf area": "4.5 acres",
  "Job Price": "$500",
  "Visits per year": "36",
  "Yearly gross rev.": "$18,000",
};
const activityReportLoganSheet = [
  {
    name: "Mower - 21 inch base",
    costPerHour: 30,
    budgetedMinutes: 50,
    actualMinutes: 60,
  },
  {
    name: "Mower - Zero turn 42 inch base",
    costPerHour: 35,
    budgetedMinutes: 200,
    actualMinutes: 230,
  },
  {
    name: "Grass Trimmer",
    costPerHour: 25,
    budgetedMinutes: 60,
    actualMinutes: 45,
  },
  {
    name: "Hedge Trimmer",
    costPerHour: 25,
    budgetedMinutes: 30,
    actualMinutes: 30,
  },
  {
    name: "Tre Trimmer",
    costPerHour: 25,
    budgetedMinutes: 0,
    actualMinutes: 0,
  },
  {
    name: "Edger",
    costPerHour: 25,
    budgetedMinutes: 30,
    actualMinutes: 30,
  },
  {
    name: "Blower",
    costPerHour: 25,
    budgetedMinutes: 30,
    actualMinutes: 30,
  },
  {
    name: "Spreader",
    costPerHour: 30,
    budgetedMinutes: 0,
    actualMinutes: 0,
  },
  {
    name: "Sprayer",
    costPerHour: 30,
    budgetedMinutes: 0,
    actualMinutes: 0,
  },
  {
    name: "Weeding Bucket",
    costPerHour: 20,
    budgetedMinutes: 60,
    actualMinutes: 85,
  },
  {
    name: "Shovel",
    costPerHour: 20,
    budgetedMinutes: 0,
    actualMinutes: 0,
  },
  {
    name: "Rake",
    costPerHour: 20,
    budgetedMinutes: 0,
    actualMinutes: 0,
  },
  {
    name: "Pruner",
    costPerHour: 20,
    budgetedMinutes: 0,
    actualMinutes: 0,
  },
];
const jobsLoganSheet = [
  {
    date: "9/1/22",
    budgetedMinutes: 460,
    actualMinutes: 510,
    budgetedCost: 224.17,
    actualCost: 248.75,
    varianceInMinutes: -50,
    dollarVariance: -24.58,
    report: activityReportLoganSheet,
  },
  {
    date: "9/8/22",
    budgetedMinutes: 460,
    actualMinutes: 510,
    budgetedCost: 224.17,
    actualCost: 248.75,
    varianceInMinutes: -50,
    dollarVariance: -24.58,
    report: activityReportLoganSheet,
  },
  {
    date: "9/15/22",
    budgetedMinutes: 460,
    actualMinutes: 510,
    budgetedCost: 224.17,
    actualCost: 248.75,
    varianceInMinutes: -50,
    dollarVariance: -24.58,
    report: activityReportLoganSheet,
  },
  {
    date: "9/22/22",
    budgetedMinutes: 460,
    actualMinutes: 510,
    budgetedCost: 224.17,
    actualCost: 248.75,
    varianceInMinutes: -50,
    dollarVariance: -24.58,
    report: activityReportLoganSheet,
  },
  {
    date: "9/29/22",
    budgetedMinutes: 460,
    actualMinutes: 510,
    budgetedCost: 224.17,
    actualCost: 248.75,
    varianceInMinutes: -50,
    dollarVariance: -24.58,
    report: activityReportLoganSheet,
  },
  {
    date: "10/6/22",
    budgetedMinutes: 460,
    actualMinutes: 510,
    budgetedCost: 224.17,
    actualCost: 248.75,
    varianceInMinutes: -50,
    dollarVariance: -24.58,
    report: activityReportLoganSheet,
  },
];

const clients = [
  {
    name: "Davey Tree Plano Property",
    properties: [
      {
        name: "880 N Dorothy Dr",
        jobs: jobsLoganSheet,
        info: propertyInfoLoganSheet,
        plan: propertyPlanLoganSheet,
      },
    ],
  },
  {
    name: "Shady Oaks Neighborhood",
    properties: [
      {
        name: "1700 Shady Oaks Dr",
        jobs: jobs,
        info: propertyInfo,
        plan: propertyPlan,
      },
      {
        name: "1444 Dark Oaks Dr",
        jobs: jobs,
        info: propertyInfo,
        plan: propertyPlan,
      },
      {
        name: "1125 Smelly Ln",
        jobs: jobs,
        info: propertyInfo,
        plan: propertyPlan,
      },
      {
        name: "443 W Dove Ct",
        jobs: jobs,
        info: propertyInfo,
        plan: propertyPlan,
      },
    ],
  },
  {
    name: "Carroll Office Park",
    properties: [
      {
        name: "Suite 111A",
        jobs: jobs,
        info: propertyInfo,
        plan: propertyPlan,
      },
      {
        name: "Suite 111B",
        jobs: jobs,
        info: propertyInfo,
        plan: propertyPlan,
      },
      {
        name: "Chem Lab West",
        jobs: jobs,
        info: propertyInfo,
        plan: propertyPlan,
      },
    ],
  },
  {
    name: "Client 3",
    properties: [
      {
        name: "Property 1",
        jobs: jobs,
        info: propertyInfo,
        plan: propertyPlan,
      },
      {
        name: "Property 2",
        jobs: jobs,
        info: propertyInfo,
        plan: propertyPlan,
      },
      {
        name: "Property 3",
        jobs: jobs,
        info: propertyInfo,
        plan: propertyPlan,
      },
    ],
  },
];
export default async (req, res) => {
  return clients;
};
