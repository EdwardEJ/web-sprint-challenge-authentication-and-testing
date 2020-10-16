const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('server.js', () => {
  describe('Get /', () => {
    it('Should return 200 OK', () => {
      return supertest(server)
        .get('/')
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
});
