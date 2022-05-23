const server = require("./src/app.js");

server.listen(process.env.PORT, async () => {
  console.log("%s listening at " + process.env.PORT);
});
