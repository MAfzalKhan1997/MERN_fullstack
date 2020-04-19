const passport = require("passport");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("<h1>Dasboard</h1>");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      process.env.NODE_ENV === "production"
        ? res.redirect("https://obscure-fjord-08759.herokuapp.com/surveys")
        : res.redirect("http://localhost:3000/surveys");
    }
  );

  // app.get("/surveys", (req, res) => {
  //   res.send("<h1>Surveysssssss</h1>");
  //   // res.redirect("/");
  // });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
