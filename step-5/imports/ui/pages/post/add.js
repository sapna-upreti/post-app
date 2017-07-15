import { FlowRouter } from 'meteor/kadira:flow-router';
import { Materialize } from 'meteor/materialize:materialize';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { Meteor } from 'meteor/meteor';

import Posts from './../../../api/posts/posts';
import './add.html';

Template.addPost.rendered = function () {
};

Template.addPost.events({
  submit(event) {
    event.preventDefault();
    const data = {};
    $('form').serializeArray().map((obj) => {
      data[obj.name] = obj.value;
      return obj;
    });
    const postId = Posts.insert({
      title: data.title,
      description: data.description,
      userId: Meteor.userId(),
      likes: 0,
      author: /* Meteor.user().emails[0].address*/'yolo',
      createdAt: new Date(),
      users: []
    });

    if (!postId) {
      Materialize.toast('Unknown Error', 4000, 'rounded');
    } else {
      Materialize.toast('Post added Successfully', 4000, 'rounded');
      FlowRouter.go('/posts');
    }
  },
});
