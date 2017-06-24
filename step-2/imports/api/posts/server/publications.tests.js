// Tests for the posts publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'meteor/practicalmeteor:chai';
import Posts from '../posts.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('posts publications', function () {
  beforeEach(function () {
    Posts.remove({});
    Posts.insert({
      title: 'NX homepage',
      description: 'This is our home page',
      author: 'userId',
      likes: 2
    });
  });

  describe('posts.all', function () {
    it('sends all posts', function (done) {
      const collector = new PublicationCollector();
      collector.collect('posts.all', (collections) => {
        assert.equal(collections.posts.length, 1);
        done();
      });
    });
  });
});
