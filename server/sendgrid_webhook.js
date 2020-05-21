const localtunnel = require("localtunnel");

(async () => {
  console.log("Tunnel Running Outside");

  const tunnel = await localtunnel({
    port: 5000,
    subdomain: "asdjhwkbavvhasdf",
    host: "http://serverless.social",
  });

  console.log("Tunnel Running");
  // tunnel.url = "https://asdjhwkbavvhasdf.localtunnel.me";

  tunnel.on("close", () => {
    console.log("Tunnel Closed");
  });
})();
// lt -h "http://serverless.social" -p 5000 -s asdjhwkbavvhasdf
// http://asdjhwkbavvhasdf.serverless.social/api/surveys/webhooks
