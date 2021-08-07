export default {
    async loadRecords(context) {
        const response = await fetch(
          "https://fishing-app-c86ec-default-rtdb.firebaseio.com/records.json"
        );
  
        const responseData = await response.json();
  
        const records = [];
  
        for (const key in responseData) {
          const record = {
            id: key,
            angler: responseData[key].Angler,
            comment: responseData[key].Comment,
            reservoir: responseData[key].Reservoir,
            species: responseData[key].Species,
            timestamp: responseData[key].Timestamp,
            weight: responseData[key].Weight,
          };
          records.push(record);
        }
        this.recordsList = records;

        context.commit('setRecordsList', records);
        //console.log(this.recordsList);
      },

      crotonTrips(state){
        var trips = [];
        for (var i = 0; i < state.recordsList.length; i++) {
          if (state.recordsList[i].reservoir === "Croton") {
            var crotonTrip = {
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
}