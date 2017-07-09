// Definition of the users collection

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const userSchema = new SimpleSchema({
  emails: {
    type: [Object],
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'Email Address',
  },
  'emails.$.verified': {
    type: Boolean,
    defaultValue: false,
  },
  createdAt: {
    type: Date,
  },
  profile: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
});

const Users = Meteor.users;
Users.attachSchema(userSchema);
export default Users;
