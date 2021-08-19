const { example } = require('yargs')
const Secrets = require('../src/aws/secrets')

const name = `${process.env.ENVIRONMENT}/lambda/integration-batch`
const region = process.env.AWS_REGION


async function test() {
    let secrets = new Secrets(name, region)
    let data = await secrets.get()
    console.log(data)
}


test()