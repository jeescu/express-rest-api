import { expect } from 'chai';
import { getTokenForUser } from './userToken';

describe('User Token util', () => {
  it('should get token for user', () => {
    expect(getTokenForUser({})).to.not.equal('');
  });
});