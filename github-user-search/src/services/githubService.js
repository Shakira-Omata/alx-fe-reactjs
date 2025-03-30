import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Handle  errors (4xx, 5xx)
      if (error.response.status === 404) {
        throw new Error(`User "${username}" not found on GitHub`);
      }
      throw new Error(`GitHub API error: ${error.response.status} ${error.response.statusText}`);
    } else if (error.request) {
        // Handle network errors (no response received)
      throw new Error('No response from GitHub API - network error');
    } else {
      throw new Error('Error setting up request to GitHub API');
    }
  }
};

export { fetchUserData };