// Methods related to posts

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Posts from './posts.js';

Meteor.methods({
  'posts.insert': function (title, description, userId = this.userId) {
    check(description, String);
    check(title, String);
    check(userId, String);

    return Posts.insert({
      title,
      description,
      userId,
      likes: 0,
      author: /* Meteor.user().emails[0].address*/'yolo',
      createdAt: new Date(),
      users: [],
    });
  }
});
