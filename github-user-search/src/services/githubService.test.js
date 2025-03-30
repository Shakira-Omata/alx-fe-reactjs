import axios from 'axios';
import { fetchUserData } from './githubService';

jest.mock('axios');

describe('fetchUserData', () => {
  it('should fetch user data successfully', async () => {
    const mockData = {
      login: 'testuser',
      name: 'Test User',
      avatar_url: 'https://example.com/avatar',
      html_url: 'https://github.com/testuser',
      bio: 'Test bio'
    };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchUserData('testuser');
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/testuser');
  });

  it('should handle 404 error', async () => {
    axios.get.mockRejectedValue({ response: { status: 404 } });

    await expect(fetchUserData('nonexistentuser'))
      .rejects
      .toThrow('User not found');
  });

  it('should handle other errors', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));

    await expect(fetchUserData('testuser'))
      .rejects
      .toThrow('Failed to fetch user data');
  });
});

// test the fetchUserData function.
// checks for successful data fetching, handling of 404 errors, and handling of other errors.
