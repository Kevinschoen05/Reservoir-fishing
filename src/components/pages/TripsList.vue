<template>
  <div v-if="this.reservoir === 'croton'">
    <trips-item
      v-for="trips in crotonTripsList"
      :key="trips.date"
      :tripDate="trips.date"
    >
      <base-button>View Details</base-button>
    </trips-item>
  </div>
  <div v-if="this.reservoir === 'muscoot'">
    <trips-item
      v-for="trips in muscootTripsList"
      :key="trips.date"
      :tripDate="trips.date"
    >
      <base-button>View Details</base-button>
    </trips-item>
  </div>
</template>

<script>
import TripsItem from "../../trips/TripsItem.vue";
//import TripsTable from "../../trips/tripTable.vue";
export default {
  components: { TripsItem },
  props: ["reservoir"],
  data() {
    return {
      crotonTripsList: [],
      muscootTripsList: [],
    };
  },
  computed: {
    crotonWeight() {
      return this.$store.getters["crotonWeight"];
    },
    crotonTrips() {
      return this.$store.getters["crotonTrips"];
    },
    muscootWeight() {
      return this.$store.getters["muscootWeight"];
    },
    muscootTrips() {
      return this.$store.getters["muscootTrips"];
    },
  },
  methods: {
    groupCrotonRecordsByDate() {
      const trips = this.crotonTrips;
      trips.reduce((trips, record) => {
        const date = record.timestamp.split("T")[0];
        if (!trips[date]) {
          trips[date] = [];
        }
        trips[date].push(record);
        this.crotonTripsList = trips;
        return trips;
      }, {});
      const tripArrays = Object.keys(this.crotonTripsList).map((date) => {
        return {
          date,
          records: this.crotonTripsList[date],
        };
      });
      this.crotonTripsList = tripArrays;
      console.log(tripArrays);
      return tripArrays;
    },
    groupMuscootRecordsByDate() {
      const trips = this.muscootTrips;
      trips.reduce((trips, record) => {
        const date = record.timestamp.split("T")[0];
        if (!trips[date]) {
          trips[date] = [];
        }
        trips[date].push(record);
        this.muscootTripsList = trips;
        return trips;
      }, {});
      const tripArrays = Object.keys(this.muscootTripsList).map((date) => {
        return {
          date,
          records: this.muscootTripsList[date],
        };
      });
      this.muscootTripsList = tripArrays;
      console.log(tripArrays);
      return tripArrays;
    },
  },
  created() {
    if (this.reservoir === "croton") {
      this.groupCrotonRecordsByDate();
    } else if (this.reservoir === "muscoot") {
      this.groupMuscootRecordsByDate();
    }
  },
};
</script>