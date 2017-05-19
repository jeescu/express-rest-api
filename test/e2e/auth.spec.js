import request from 'supertest';
import app from '../../src';

describe('Authentication', () => {
  describe('Sign In', () => {
    it('should return unauthorized for invalid user', () => {
      request(app)
        .post('/auth/signin')
        .send({ email: 'anonymous@mail.co', password: '123' })
        .expect(401)
        .end((err) => {
          if (err) throw err;
        });
    });
  });
});