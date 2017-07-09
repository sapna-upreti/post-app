// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-ui';
import Users from '../../api/users/users.js';
import Posts from '../../api/posts/posts.js';

Meteor.startup(() => {
  // if the users collection is empty
  let userId = null;
  if (Users.find().count() === 0) {
    userId = Accounts.createUser({
      email: 'nx@nodexperts.com',
      password: 'nx@12345',
    });
  } else {
    userId = Users.findOne()._id;
  }
  if (Posts.find().count() === 0) {
    const data = [
      {
        title: 'Meteor',
        description: 'Meteor is awesome for all types of application',
        likes: 0,
        users: [],
        author: userId,
      },
      {
        title: 'Title',
        description: 'Description here',
        likes: 0,
        users: [],
        author: userId,
      },
      {
        title: 'Reactive application with Meteor',
        description: 'Reactivity',
        likes: 0,
        users: [],
        author: userId,
      },
      {
        title: 'Title two',
        description: 'Here',
        likes: 0,
        users: [],
        author: userId,
      },
    ];

    data.forEach(post => Posts.insert(post));
  }
});
