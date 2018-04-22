import axios from "axios";

export default {
  // Gets all event
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Gets the event with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a event to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },

    // Gets all mountains
    getMountains: function() {
      return axios.get("/api/mountains");
    },
    // Gets the mountains with the given id
    getMountain: function(id) {
      return axios.get("/api/mountains/" + id);
    },
    // Deletes the mountains with the given id
    deleteMountain: function(id) {
      return axios.delete("/api/mountains/" + id);
    },
    // Saves a mountains to the database
    saveMountain: function(mountainData) {
      return axios.post("/api/mountains", mountainData);
    },

        // Gets all mountain info
        getMtsInfo: function() {
          return axios.get("/api/mtsinfo");
        },
        // Gets the mountain info with the given id
        getMtInfo: function(id) {
          return axios.get("/api/mtsinfo/" + id);
        },
        // Deletes the mountain info with the given id
        deleteMtInfo: function(id) {
          return axios.delete("/api/mtsinfo/" + id);
        },
        // Saves a mountain info to the database
        saveMtInfo: function(mtinfoData) {
          return axios.post("/api/mtsinfo", mtinfoData);
        }
};
