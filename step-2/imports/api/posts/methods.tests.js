// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import Posts from './posts.js';
import './methods.js';

if (Meteor.isServer) {
  describe('post methods', function () {
    beforeEach(function () {
      Posts.remove({});
    });

    it('can add a new post', function () {
      const addPost = Meteor.server.method_handlers['posts.insert'];

      addPost.apply({}, ['test', 'test description', 'user_id']);

      assert.equal(Links.find().count(), 1);
    });
  });
}
