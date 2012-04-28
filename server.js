// Module load
var express = require('express'),
    sio = require('socket.io');

//Create server
var app = express.createServer();

//Define static directory
app.configure(function () {
  app.use(express.static(__dirname));
});

//route
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

//listen 8080 port & write log
app.listen(8080, function () {
  var addr = app.address();
  console.log('   app listening on http://' + addr.address + ':' + addr.port);
});

//socket.io
var io = sio.listen(app)
  , nicknames = {};

io.sockets.on('connection', function (socket) {
  socket.on('user message', function (msg) {
	  io.sockets.emit('user message', {nickname: socket.id, message: msg});
  });

  socket.on('nickname', function (nick, fn) {
    if (nicknames[nick]) {
      fn(true);
    } else {
      fn(false);
      nicknames[nick] = socket.nickname = nick;
      socket.broadcast.emit('announcement', nick + ' connected');
      io.sockets.emit('nicknames', nicknames);
    }
  });

  socket.on('disconnect', function () {
    if (!socket.nickname) return;

    delete nicknames[socket.nickname];
    socket.broadcast.emit('announcement', socket.nickname + ' disconnected');
    socket.broadcast.emit('nicknames', nicknames);
  });
});