const requireAuth = require("../middlewares/requireAuth");
const requireCredits = require("../middlewares/requireCredits");

module.exports = (app) => {
  app.post("/api/survey", requireAuth, requireCredits, async (req, res) => {});
};
