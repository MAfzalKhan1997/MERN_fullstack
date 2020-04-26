const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");
// const sgMail = require("@sendgrid/mail");
// const keys = require("../config/keys");

// sgMail.setApiKey(keys.sendGridKey);

const requireAuth = require("../middlewares/requireAuth");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

module.exports = (app) => {
  app.post("/api/surveys", requireAuth, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map((email) => ({ email })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    try {
      await Mailer(survey, surveyTemplate(survey));
      console.log("Email sent successfully");
    } catch (error) {
      if (error.response) {
        console.error("Error", error.response.body);
      }
    }

    console.log("After Email");

    // const mailer = new Mailer(survey, surveyTemplate(survey));
    // try {
    // await mailer.send();
    // await survey.save();
    // req.user.credits -= 1;
    // const user = await req.user.save();

    // res.send(user);
    // } catch (err) {
    //   res.status(422).send(err);
    // }
  });
};
