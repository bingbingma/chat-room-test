var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;

// app.get("/", function(req, res) {
//   res.send("<h1>Hello world</h1>");
// });

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("an user connected");
});

io.on("connection", function(socket) {
  console.log("an user connected");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    console.log("message: " + msg);
  });
});

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
  });
});

io.emit("some event", { for: "everyone" });

http.listen(3000, function() {
  console.log(`listening on http://localhost:${port}`);
});

///////
