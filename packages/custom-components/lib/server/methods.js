if (Meteor.isServer) {
    ServiceConfiguration.configurations.remove({
        service: 'vk'
    });

    ServiceConfiguration.configurations.insert({
        service: 'vk',
        appId:   '5476494',      // Your app id
        secret:  'wHlV3A83F7gXVbX8vlnX' // Your app secret
    });
}