if (Meteor.isServer) {
  if (!!S3) {
    S3.config = {
        key: 'AKIAJ2EVHQBKACQRJJLQ',
        secret: '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',
        bucket: 'medach',
        region: 'eu-west-1' // Only needed if not "us-east-1" or "us-standard"
    };
  } else {
    console.log('there is no S3')
  }
};