import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error("Something went wrong");
  }
};

export const fetchUsers = async (username, location, minRepos, page= 1) => {
    try{
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
