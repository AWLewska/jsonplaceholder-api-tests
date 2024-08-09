const axios = require('axios');

describe('JSONPlaceholder API Tests', () => {
  it('should fetch all posts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
  });
});

