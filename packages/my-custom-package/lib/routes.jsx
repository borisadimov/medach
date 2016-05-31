/*
A new custom route for our custom page.
Browse to http://localhost:3000/my-custom-route to see it.
*/

import React from 'react';
import {mount} from 'react-mounter';

import MyCustomPage from './components/MyCustomPage.jsx';
import MyCustomPage2 from './components/MyCustomPage2.jsx';



FlowRouter.route('/donate', {
  name: 'myCustomRoute',
  action(params, queryParams) {

    mount(Telescope.components.App, {content: <MyCustomPage />})
  }
});

FlowRouter.route('/thank-you', {
  name: 'thankYou',
  action(params, queryParams) {

    mount(Telescope.components.App, {content: <MyCustomPage2 />})
  }
});
if (Meteor.isServer) {
  Meteor.startup(function() {
   Accounts.emailTemplates.resetPassword.text = (user, url) => {
      url = url.replace('#/', '');
      return ("Click this link to reset your password: " + url)
    }
  });
}
FlowRouter.route('/reset-password/:token', {
  name: 'reset-password',
  action: function(params) {
    if (Meteor.isClient) {
      Accounts.resetPassword(params.token, prompt('enter new password'), function () {
          FlowRouter.go('/');
      });
    }
  }
});