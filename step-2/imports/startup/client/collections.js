import { Mongo } from 'meteor/mongo';

const collections = {};
Posts = new Mongo.Collection('posts');
collections.Posts = Posts;
export default collections;
