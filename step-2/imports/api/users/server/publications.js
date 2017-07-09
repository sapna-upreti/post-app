// All users-related publications

import { Meteor } from 'meteor/meteor';
import Users from '../users.js';

Meteor.publish('user.byId', id => Users.find({ _id: id }));
