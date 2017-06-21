
import { Meteor } from 'meteor/meteor';
import { EJSON } from 'meteor/ejson';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import needed templates
import '../../ui/layouts/masterLayout.js';
import '../../ui/layouts/nav.js';
import '../../ui/layouts/loading.html';
import '../../ui/layouts/footer.html';
import '../../ui/pages/home/home.js';
import '../../ui/pages/post/post.js';
import '../../ui/pages/post/add.js';
import '../../ui/layouts/not-found.js';

/*
  Route definitions
*/

FlowRouter.route('/', {
  name: "home",
  triggersEnter: [function(context, redirect) {
    if (Meteor.userId()) {
      redirect('/posts');
    }
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      main: "home"
    });
  }
});


FlowRouter.route('/posts', {
  name: "post",
  subscriptions: function(params) {
    this.register('posts', Meteor.subscribe('posts.all'));
  },
  triggersEnter: [function(context, redirect) {
    if (!Meteor.userId()) {
      redirect('/');
    }
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      footer: "footer",
      main: "post",
      nav: "nav",
    });
  }
});


FlowRouter.route('/add-posts', {
  name: "addPost",
  subscriptions: function(params) {
  },
  triggersEnter: [function(context, redirect) {
    if (!Meteor.userId()) {
      redirect('/');
    }
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      footer: "footer",
      main: "addPost",
      nav: "nav",
    });
  }
});


FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('masterLayout', {
      footer: "footer",
      main: "pageNotFound",
      nav: "nav",
    });
  }
};

FlowRouter.route('/dashboard', {
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      nav: "header",
      main: "dashboard"
    });
  }
});


// FlowRouter.route('/menu', {
//   triggersEnter: [AccountsTemplates.ensureSignedIn],
//   action: function(params, queryParams) {
//     BlazeLayout.render('masterLayout', {
//       nav: "header",
//       main: "menu"
//     });
//   }
// });



// Account Templates
// Options
AccountsTemplates.configure({
  defaultLayout: 'masterLayout',
  defaultLayoutRegions: {
    nav: 'nav',
    footer: 'footer',
  },
  defaultContentRegion: 'main',
  showForgotPasswordLink: true,
  overrideLoginErrors: true,
  enablePasswordChange: true,

  // sendVerificationEmail: true,
  // enforceEmailVerification: true,
  //confirmPassword: true,
  //continuousValidation: false,
  //displayFormLabels: true,
  //forbidClientAccountCreation: true,
  //formValidationFeedback: true,
  //homeRoutePath: '/',
  //showAddRemoveServices: false,
  //showPlaceholders: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true,

  // Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',
});


AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');