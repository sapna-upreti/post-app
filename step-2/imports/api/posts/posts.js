// Definition of the post collection

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const postSchema = new SimpleSchema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  likes: {
    type: Number,
  },
  createdAt: {
    type: Date,
    optional: true,
  },
  users: {
    type: [String],
    optional: true,
  },

});

const Posts = new Mongo.Collection('posts');
Posts.attachSchema(postSchema);
export default Posts;
