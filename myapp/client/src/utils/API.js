import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/saved");
  },
  // Gets the article with the given id
  getArticles: function(id) {
    return axios.get("/api/saved/" + id);
  },
  // Deletes the article with the given id
  deleteArticles: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves an article to the database
  saveArticles: function(articleData) {
    return axios.post("/api/saved", articleData);
  }
};
