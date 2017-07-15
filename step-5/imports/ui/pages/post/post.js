import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import Posts from './../../../api/posts/posts';
import './../../layouts/loading.html';
import './post.html';

Template.post.helpers({
  posts() {
    return Posts.find();
  },
  isLiked(userIds) {
    return userIds.indexOf(Meteor.userId()) >= 0;
  },
});

Template.post.events({
  'click #like': function () {
  },
  'click #unlike': function () {
  },
});
