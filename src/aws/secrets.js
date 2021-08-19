
const AWS   = require('aws-sdk');

/** Secrets module
 *
 */
let Secrets = class {

    constructor(name, region){
        this.name = name
        this.region = region
        this.client = null
        this.secrets = null
    }

    init() {
        this.client = new AWS.SecretsManager({
            region: this.region
        });
    }

    async get() {
        try {
            this.init()

            let data = await this.client.getSecretValue({
                SecretId: this.name
            }).promise()

            if ('SecretString' in data){
                this.secrets = JSON.parse(data.SecretString)
            }

            return this.secrets

        } catch (err) {
            let msg = `Error: ${err.code}`
            throw msg;
        }

    }
}

module.exports = Secrets
