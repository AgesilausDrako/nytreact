import axios from "axios";

export default {
  // Gets all articles
  getArticles: () => {
    return axios.get("/api/saved");
  },
  // Gets the article with the given id
  getArticles: (id) => {
    return axios.get("/api/saved/" + id);
  },
  // Deletes the article with the given id
  deleteArticles: (id) => {
    return axios.delete("/api/saved/" + id);
  },
  // Saves an article to the database
  saveArticles: (articleData) => {
    return axios.post("/api/saved", articleData);
  }
};
