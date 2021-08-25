<template>
  <div v-if="this.reservoir === 'croton'">
    <trips-table v-for="trips in crotonTripsList" :key="trips.timestamp">
      <trips-item></trips-item>
    </trips-table>
  </div>
  <div v-if="this.reservoir === 'muscoot'">
    <trips-table v-for="trips in muscootTripsList" :key="trips.timestamp">
      <trips-item v-for="trips in muscootTripsList['']" :key="trips.timestamp" :tripDate="trips.timestamp"></trips-item>
    </trips-table>
  </div>
</template>

<script>
import TripsItem from "../../trips/TripsItem.vue";
import TripsTable from "../../trips/tripTable.vue";
export default {
  components: { TripsItem, TripsTable },
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
      console.log(this.crotonTripsList);
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
      console.log(this.muscootTripsList);
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