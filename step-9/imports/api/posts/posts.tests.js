// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import Posts from './posts.js';

if (Meteor.isServer) {
  describe('post collection', () => {
    it('insert correctly', () => {
      const postId = Posts.insert({
        title: 'Test post',
        description: 'Test description',
        userId: 'user_id',
        author: 'test',
        users: [],
        likes: 0,
      });
      const added = Posts.find({ _id: postId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'posts');
      assert.equal(count, 1);
    });
  });
}
