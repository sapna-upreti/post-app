// Tests for the posts publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'meteor/practicalmeteor:chai';
import Posts from '../posts.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('posts publications', () => {
  beforeEach(() => {
    Posts.remove({});
    Posts.insert({
      title: 'NX homepage',
      description: 'This is our home page',
      author: 'userId',
      likes: 2,
    });
  });

  describe('posts.all', () => {
    it('sends all posts', (done) => {
      const collector = new PublicationCollector();
      collector.collect('posts.all', (collections) => {
        assert.equal(collections.posts.length, 1);
        done();
      });
    });
  });
});
