<template>
  <ul>
    <div v-if="this.reservoir === 'croton'">
      <trips-item
        v-for="trips in crotonTrips"
        :key="trips.id"
        :tripDate="trips.timestamp"
      ></trips-item>
    </div>
    <div v-if="this.reservoir === 'muscoot'">
      <trips-item
        v-for="trips in muscootTrips"
        :key="trips.id"
        :tripDate="trips.timestamp"
      ></trips-item>
    </div>
  </ul>
</template>

<script>
import TripsItem from "../../trips/TripsItem.vue";
export default {
  components: { TripsItem },
  props: ["reservoir"],
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
};
</script>