const axios = require('axios');
require('dotenv').config();

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const API_TOKEN = process.env.API_TOKEN; // Use your PAT if needed

describe('JSONPlaceholder API Tests - Create Post', () => {
  it('should create a new post', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    const response = await axios.post(`${API_BASE_URL}/posts`, newPost, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}` // Add if authentication is required
      }
    });

    expect(response.status).toBe(201); // Created
    expect(response.data).toMatchObject(newPost);
  });
});

