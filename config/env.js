'use strict'

const cfenv = require("cfenv");
const cloudFoundry = cfenv.getAppEnv();

module.exports = {

  getMongoUrl: () => {
    const service       = 'mydb',
          localMongoUrl = 'mongodb://localhost/mydb';

    return cloudFoundry.getServiceURL(service) || localMongoUrl;
  },

  getPort: () => {
    return cloudFoundry.port || 3000;
  }

}
