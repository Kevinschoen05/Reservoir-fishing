<template>
  <ul>
      <trips-item
        v-for="trips in crotonTrips"
        :key="trips.id"
        :tripDate="trips.timestamp"
      ></trips-item>
  </ul>
</template>

<script>
import TripsItem from "../../trips/TripsItem.vue";
export default {
  components: { TripsItem },
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