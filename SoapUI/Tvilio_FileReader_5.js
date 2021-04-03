//https://cloud.google.com/community/tutorials/github-auto-assign-reviewers-cloud-functions

function validateRequest (req) {
    return Promise.resolve()
      .then(() => {
        const digest = crypto
          .createHmac('sha1', settings.secretToken)
          .update(JSON.stringify(req.body))
          .digest('hex');
  
        if (req.headers['x-hub-signature'] !== `sha1=${digest}`) {
          const error = new Error('Unauthorized');
          error.statusCode = 403;
          throw error;
        } else {
          console.log('Request validated.');
        }
      });
  }
  