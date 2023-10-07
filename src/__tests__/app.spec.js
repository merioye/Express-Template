const request = require('supertest');
const { app } = require('../app');

describe('App', () => {
  it('returns 200 status', async () => {
    const response = await request(app).get('/api').send();
    expect(response.statusCode).toBe(200);
  });
});
