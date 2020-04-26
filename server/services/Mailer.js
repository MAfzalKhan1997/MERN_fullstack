const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

sgMail.setApiKey(keys.sendGridKey);

const Mailer = async ({ subject, recipients }, content) => {
  const msg = {
    to: recipients.map(({ email }) => email),
    from: "mafzalkhan1997@gmail.com",
    subject: subject,
    html: content,
  };

  const response = await sgMail.sendMultiple(msg);
  return response;
};

module.exports = Mailer;

// sendMultiple to hide other users email in a queue
// .send(msg)
// send to show other users in a queue
