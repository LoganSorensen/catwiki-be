const http = require("http");
const app = require("./app");

const port = process.eventNames.PORT || 5000;

const server = http.createServer(app);

server.listen(port);
