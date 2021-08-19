
const Secrets = require('../src/aws/secrets')

const name = `${process.env.ENVIRONMENT}/lambda/integration-batch`
// const name = `${process.env.ENVIRONMENT}/lambda/integration-batch2`
const region = process.env.AWS_REGION


test("Obtencion exitosa de variables de secrets", async () => {

    console.log(name)
    console.log(region)

    let secrets = new Secrets(name, region)
    let data = await secrets.get()
    console.log(data)
    expect(data).toBeInstanceOf(Object);
});