const ProtonMail = require('protonmail-api');
const config = require('./src/utils/config');

(async () => {
  const pm = await ProtonMail.connect({
    username: config.email,
    password: config.password
  })

  await pm.sendEmail({
    to: 'dastan@limechain.tech',
    subject: 'Send email tutorial',
    body: 'Hello world'
  })

  pm.close()
})()