<template>
  <base-card>
    <h1>{{ reservoirName }}</h1>
    <h2>{{ totalTrips }} Trips</h2>
    <h2>{{ totalWeight }} lbs</h2>
    <base-button link :to="link">View Trips</base-button>
  </base-card>
</template>
<script>
export default {
  props: ["reservoirName", "totalTrips", "totalWeight", "link"],
};
</script>