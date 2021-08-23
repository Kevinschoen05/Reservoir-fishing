
export default {
    

    
    async loadRecords(context) {
        const response = await fetch(
          "https://reservoir-fishing-default-rtdb.firebaseio.com/records.json"
        );
  
        const responseData = await response.json();
  
        const records = [];
  
        for (const key in responseData) {
          const record = {
            zero: responseData[key].zero,
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
      
      

}