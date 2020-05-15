const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");

const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");

const requireAuth = require("../middlewares/requireAuth");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

module.exports = (app) => {
  app.get("/api/surveys", requireAuth, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });

    res.send(surveys);
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) =>
    res.send("Thanks for Voting!")
  );

  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");
    const events = _.chain(req.body)
      .map((event) => {
        const match = p.test(new URL(event.url).pathname);
        if (match) {
          return { email: event.email, ...match };
        }
      })
      .compact() // remove undefined elements
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();
    console.log("EVENTS", events);

    res.send({});
  });

  app.post("/api/surveys", requireAuth, requireCredits, async (req, res) => {
    const { SurveyTitle, SubjectLine, EmailBody, RecipientList } = req.body;

    const survey = new Survey({
      title: SurveyTitle,
      subject: SubjectLine,
      body: EmailBody,
      recipients: RecipientList.split(",").map((email) => ({ email })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    try {
      await Mailer(survey, surveyTemplate(survey));
      console.log("Email sent successfully");
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (error) {
      res.status(422).send(error);
      if (error.response) {
        console.error("Error", error.response.body);
      }
    }

    console.log("After Email and Survey");
  });
};
