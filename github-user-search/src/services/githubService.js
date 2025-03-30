import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUsers = async (username, location, minRepos, page = 1) => {
    try {
      let query = "";
  
      if (username) query += `${username} in:login `;
      if (location) query += `location:${location} `;
      if (minRepos) query += `repos:>${minRepos} `;
  
      const response = await axios.get(`${BASE_URL}${query.trim()}&page=${page}&per_page=10`);
      return response.data.items || [];
    } catch (error) {
      throw new Error("User search failed");
    }
  };
  


