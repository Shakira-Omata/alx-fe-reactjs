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

const GITHUB_API_URL = "https://api.github.com/search/users?q=";

export const fetchUsers = async (username, location, minRepos, page) => {
  try {
    const query = `${username}${location ? "+location:" + location : ""}${minRepos ? "+repos:>" + minRepos : ""}&page=${page}`;
    const response = await axios.get(`${GITHUB_API_URL}${query}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
};

