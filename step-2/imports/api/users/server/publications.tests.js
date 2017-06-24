// Tests for the users publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'meteor/practicalmeteor:chai';
import Users from '../users.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('links publications', function () {
  let id;
  beforeEach(function () {
    Users.remove({});
    id = Accounts.createUser({
      email: 'test@test.com',
      password: '1233456',
    });
  });

  describe('user.byId', function () {
    it('send current user', function (done) {
      const collector = new PublicationCollector();
      collector.collect('user.byId', id, (collections) => {
        assert.equal(collections.users.length, 1);
        done();
      });
    });
  });
});
