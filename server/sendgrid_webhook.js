// const localtunnel = require("localtunnel");

// (async () => {
//   console.log("Inside Tunnel");
//   const tunnel = await localtunnel({ port: 5000 });
//   console.log("After await Tunnel");
//   // the assigned public url for your tunnel
//   // i.e. https://abcdefgjhij.localtunnel.me
//   tunnel.url = "https://asdjhwkbavvhasdf.localtunnel.me/api/surveys/webhooks";

//   tunnel.on("close", () => {
//     // tunnels are closed
//     console.log("Tunnel Closed");
//   });
// })();
console.log("Outside Tunnel");
// localtunnel(5000, { subdomain: "asdjhwkbavvhasdf" }, function (err, tunnel) {
//   console.log("LT running", "Error", err, "Tunnel", tunnel);
// });
// "webhook": "lt -p 5000 -s asdjhwkbavvhasdf"
// lt -h "http://serverless.social" -p PORT