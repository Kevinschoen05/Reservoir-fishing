<template>
    <trips-table v-if="this.reservoir === 'croton'">
      <trips-item
        v-for="trips in crotonTripsList"
        :key="trips.id"
        :tripDate="trips[value].timestamp"
      ></trips-item>
    </trips-table>
    <trips-table v-if="this.reservoir === 'muscoot'">
      <trips-item
        v-for="dates in muscootTripsList"
        :key="dates.id"
        :tripDate="dates.value"
      ></trips-item>
    </trips-table>
</template>

<script>
import TripsItem from "../../trips/TripsItem.vue";
import TripsTable from '../../trips/tripTable.vue'
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