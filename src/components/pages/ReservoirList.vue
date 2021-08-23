<template>
  <the-header :title="headerTitle"></the-header>
  <reservoir-item
    reservoirName="Croton"
    :totalTrips="crotonTripsCounter"
    :totalWeight="crotonWeight"
    :link="crotonTripsLink"
  >
  </reservoir-item>
  <reservoir-item
    reservoirName="Muscoot"
    :totalTrips="muscootTripsCounter"
    :totalWeight="muscootWeight"
    :link="muscootTripsLink"
  >
  </reservoir-item>
</template>

<script>
import ReservoirItem from '../reservoir/ReservoirItem.vue'
export default {
  components:{
    ReservoirItem
  },
  data() {
    return {
      headerTitle: "Reservoir Fishing",
    };
  },
  computed: {
    crotonTripsLink() {
      return this.$route.path + "/croton/";
    },
    muscootTripsLink() {
      return this.$route.path + "/muscoot/";
    },
    //computed properties that return calculated values based on stored record list
    recordsList(){
      return this.$store.getters['recordsList']
    },
    muscootTripsCounter(){
      return this.$store.getters['muscootTripsCounter']
    },
    crotonTripsCounter(){
      return this.$store.getters['crotonTripsCounter']
    },
    muscootWeight(){
      return this.$store.getters['muscootWeight'].toFixed(2)
    },
    crotonWeight(){
      return this.$store.getters['crotonWeight'].toFixed(2)
    }
  },

};
</script>



  