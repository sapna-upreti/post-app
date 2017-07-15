// Tests for the behavior of the users collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import Users from './users.js';

if (Meteor.isServer) {
  describe('users collection', () => {
    it('insert correctly', () => {
      const userId = Accounts.createUser({
        email: 'testuser@test.com',
        password: '123445',
      });
      const added = Users.find({ _id: userId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'users');
      assert.equal(count, 1);
    });
  });
}
