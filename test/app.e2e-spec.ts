import * as request from 'supertest';

describe('API (e2e)', () => {
  it('/ (GET)', () => {
    return request('localhost:3000')
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
