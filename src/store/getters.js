export default {
  //returns all records in the database with all attributes
  recordsList(state) {
    return state.recordsList;
  },
  //returns a counter of the total trips taken on Muscoot
  muscootTripsCounter(state) {
    var muscootTrips = 0;
    for (var i = 0; i < state.recordsList.length; i++) {
      if (state.recordsList[i].reservoir === "Muscoot") {
        muscootTrips++;
      }
    }
    return muscootTrips;
  },
  //returns a counter of the total trips taken on Croton
  crotonTripsCounter(state) {
    var crotonTrips = 0;
    for (var i = 0; i < state.recordsList.length; i++) {
      if (state.recordsList[i].reservoir === "Croton") {
        crotonTrips++;
      }
    }
    return crotonTrips;
  },
  //returns a total weight of all fish caught on Muscoot
  muscootWeight(state) {
    var muscootWeight = 0;
    for (var i = 0; i < state.recordsList.length; i++) {
      if (state.recordsList[i].reservoir === "Muscoot") {
        var weight = state.recordsList[i].weight;
        muscootWeight += weight;
      }
    }
    return muscootWeight;
  },
  //returns a total weight of all fish caught on Croton
  crotonWeight(state) {
    var crotonWeight = 0;
    for (var i = 0; i < state.recordsList.length; i++) {
      if (state.recordsList[i].reservoir === "Croton") {
        var weight = state.recordsList[i].weight;
        crotonWeight += weight;
      }
    }
    return crotonWeight;
  },
  //returns each record of a fish caught on Muscoot
  muscootTrips(state) {
    var trips = [];
    for (var i = 0; i < state.recordsList.length; i++) {
      if (state.recordsList[i].reservoir === "Muscoot") {
        var muscootTrip = {
          id: state.recordsList[i].key,
          angler: state.recordsList[i].angler,
          comment: state.recordsList[i].comment,
          reservoir: state.recordsList[i].reservoir,
          species: state.recordsList[i].species,
          timestamp: state.recordsList[i].timestamp,
          weight: state.recordsList[i].weight,
        };
        trips.push(muscootTrip);
      }
    }
    return trips;
  },
  //returns each record of a fish caught on Croton
  crotonTrips(state) {
    var trips = [];
    for (var i = 0; i < state.recordsList.length; i++) {
      if (state.recordsList[i].reservoir === "Croton") {
        var crotonTrip = {
          id: state.recordsList[i].key,
          angler: state.recordsList[i].angler,
          comment: state.recordsList[i].comment,
          reservoir: state.recordsList[i].reservoir,
          species: state.recordsList[i].species,
          timestamp: state.recordsList[i].timestamp,
          weight: state.recordsList[i].weight,
        };
        trips.push(crotonTrip);
      }
    }
    return trips;
  },
};
