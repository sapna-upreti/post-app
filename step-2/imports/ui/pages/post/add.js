import './add.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

Template.addPost.rendered = function () {

};

Template.addPost.events({
  submit(event) {
    event.preventDefault();
    const data = {};
    $('form').serializeArray().map(obj => data[obj.name] = obj.value);
    Meteor.call('posts.insert', data.title, data.description, (err, res) => {
      if (err) {
        Materialize.toast(err.reason || 'Unknown Error', 4000, 'rounded');
      } else {
        Materialize.toast('Post added Successfully', 4000, 'rounded');
        FlowRouter.go('/posts');
      }
    });
  },
});
