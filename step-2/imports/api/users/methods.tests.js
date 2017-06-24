// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import Users from './users.js';
import './methods.js';

if (Meteor.isServer) {
  describe('users methods', function () {
    beforeEach(function () {
      Users.remove({});
    });

    it('can add a new user', function () {
      const addUser = Meteor.server.method_handlers['users.insert'];

      addUser.apply({}, ['test@test.com', 'password']);

      assert.equal(Users.find().count(), 1);
    });
  });
}
