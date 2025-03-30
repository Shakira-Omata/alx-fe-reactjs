import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://github.com/Shakira-Omata/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('Failed to fetch user data');
  }
};