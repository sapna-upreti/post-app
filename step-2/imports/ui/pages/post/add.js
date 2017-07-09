import { FlowRouter } from 'meteor/kadira:flow-router';
import { Materialize } from 'meteor/materialize:materialize';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { Meteor } from 'meteor/meteor';

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
    Meteor.call('posts.insert', data.title, data.description, (err) => {
      if (err) {
        Materialize.toast(err.reason || 'Unknown Error', 4000, 'rounded');
      } else {
        Materialize.toast('Post added Successfully', 4000, 'rounded');
        FlowRouter.go('/posts');
      }
    });
  },
});
