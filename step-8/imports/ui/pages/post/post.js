import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import Posts from './../../../api/posts/posts';
import './../../layouts/loading.html';
import './post.html';

Template.post.onRendered = function () {
};

Template.post.helpers({
  isReady(sub) {
    if (sub) {
      return FlowRouter.subsReady(sub);
    }
    return FlowRouter.subsReady();
  },
  posts() {
    return Posts.find();
  },
  isLiked(userIds) {
    return userIds.indexOf(Meteor.userId()) >= 0;
  },
});

Template.post.events({
  'click #like': function () {
    Meteor.call('posts.like', this._id, Meteor.userId());
  },
  'click #unlike': function () {
    Meteor.call('posts.unlike', this._id, Meteor.userId());
  },
});
