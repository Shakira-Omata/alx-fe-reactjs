import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUsers = async ({ query, location, minRepos }) => {
  try {
    let searchQuery = query ? `${query}` : "";
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}${searchQuery}&per_page=10`);
    
    return response.data.items;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      throw new Error("GitHub API rate limit exceeded. Try again later.");
    }
    throw new Error("No users found. Try different search criteria.");
  }
};



