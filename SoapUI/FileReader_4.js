const crypto = require('crypto');

  console.log(crypto.createHmac('sha256', 'a secret', 'my data', 'hex'));

  let hasher = crypto.createHMAC('sha256', 'a secret');

  hasher.update('my ');

  hasher.update('data');

  console.log(hasher.digest('hex'));

