const config = require('./config');
const ProtonMail = require('protonmail-api');

class Utils {
    static async sendEmail(email, ticket){
      const pm = await ProtonMail.connect({
        username: config.email,
        password: config.password
      });
    
      await pm.sendEmail({
        to: email,
        subject: 'Queue confirmation',
        body: `
            Dear Customer,
            
            This is the confirmation email for your queue spot at ${ticket.facility.name} for ${ticket.service.name}
        `
      })
    
      pm.close();
    }
}

module.exports = Utils;