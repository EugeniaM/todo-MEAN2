"use strict";
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
mongoose.connect('mongodb://heroku_77q6gvb7:jep2th2uruap3ghqf84l7mcjg8@ds135798.mlab.com:35798/heroku_77q6gvb7' || 'mongodb://localhost:27017/todos2');
require('./models/project.model.js');
require('./models/task.model.js');
require('./models/user.model.js');
require('./config/passport')(passport);
var appRoutes = require('./routes/app');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '.')));
app.use(express.static(path.resolve(__dirname, '../node_modules')));
app.use(passport.initialize());
app.use('/', appRoutes);
var db = mongoose.connection;
//mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
    // APIs
    // select all
    // app.get('/test', function(req, res) {
    //   Cat.find({}, function(err, docs) {
    //     if(err) return console.error(err);
    //     res.json(docs);
    //   });
    // });
    // var renderIndex = (req: express.Request, res: express.Response) => {
    //     res.sendFile(path.resolve(__dirname, 'index.html'));
    // }
    // app.get('/*', renderIndex);
    // app.post('/projects', function(req, res, next) {
    // 	res.send(req.body);
    // })
    var server = app.listen(port, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('This express app is listening on port:' + port);
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Qyx5Q0FBeUM7SUFDekMsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixNQUFNO0lBRVIsdUVBQXVFO0lBQ3ZFLDJEQUEyRDtJQUMzRCxJQUFJO0lBRUosOEJBQThCO0lBRTlCLG1EQUFtRDtJQUNuRCx1QkFBdUI7SUFDdkIsS0FBSztJQUlMLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQzFCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XHJcbnZhciBwb3J0OiBudW1iZXIgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcblxyXG52YXIgYXBwID0gZXhwcmVzcygpO1xyXG5cclxudmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxudmFyIHBhc3Nwb3J0ID0gcmVxdWlyZSgncGFzc3BvcnQnKTtcclxubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2hlcm9rdV83N3E2Z3ZiNzpqZXAydGgydXJ1YXAzZ2hxZjg0bDdtY2pnOEBkczEzNTc5OC5tbGFiLmNvbTozNTc5OC9oZXJva3VfNzdxNmd2YjcnIHx8ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3RvZG9zMicpO1xyXG5yZXF1aXJlKCcuL21vZGVscy9wcm9qZWN0Lm1vZGVsLmpzJyk7XHJcbnJlcXVpcmUoJy4vbW9kZWxzL3Rhc2subW9kZWwuanMnKTtcclxucmVxdWlyZSgnLi9tb2RlbHMvdXNlci5tb2RlbC5qcycpO1xyXG5yZXF1aXJlKCcuL2NvbmZpZy9wYXNzcG9ydCcpKHBhc3Nwb3J0KTtcclxuXHJcblxyXG52YXIgYXBwUm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvYXBwJyk7XHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5cclxuYXBwLnVzZShmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgIC8vcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsIFBPU1QnKTtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnWC1SZXF1ZXN0ZWQtV2l0aCxjb250ZW50LXR5cGUsIEF1dGhvcml6YXRpb24nKTtcclxuICAgIG5leHQoKTtcclxufSk7XHJcblxyXG5hcHAudXNlKCcvYXBwJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2FwcCcpKSk7XHJcbmFwcC51c2UoJy9saWJzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2xpYnMnKSkpO1xyXG5cclxuLy8gZm9yIHN5c3RlbS5qcyB0byB3b3JrLiBDYW4gYmUgcmVtb3ZlZCBpZiBidW5kbGluZy5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLicpKSk7XHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL25vZGVfbW9kdWxlcycpKSk7XHJcbmFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcclxuXHJcbmFwcC51c2UoJy8nLCBhcHBSb3V0ZXMpO1xyXG5cclxudmFyIGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcclxuLy9tb25nb29zZS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XHJcblxyXG5cclxuZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdjb25uZWN0aW9uIGVycm9yOicpKTtcclxuZGIub25jZSgnb3BlbicsIGZ1bmN0aW9uKCkge1xyXG4gIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gTW9uZ29EQicpO1xyXG5cclxuICAvLyBBUElzXHJcbiAgLy8gc2VsZWN0IGFsbFxyXG4gIC8vIGFwcC5nZXQoJy90ZXN0JywgZnVuY3Rpb24ocmVxLCByZXMpIHtcclxuICAvLyAgIENhdC5maW5kKHt9LCBmdW5jdGlvbihlcnIsIGRvY3MpIHtcclxuICAvLyAgICAgaWYoZXJyKSByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xyXG4gIC8vICAgICByZXMuanNvbihkb2NzKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pO1xyXG5cclxuLy8gdmFyIHJlbmRlckluZGV4ID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuLy8gICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXguaHRtbCcpKTtcclxuLy8gfVxyXG5cclxuLy8gYXBwLmdldCgnLyonLCByZW5kZXJJbmRleCk7XHJcblxyXG4vLyBhcHAucG9zdCgnL3Byb2plY3RzJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcclxuLy8gXHRyZXMuc2VuZChyZXEuYm9keSk7XHJcbi8vIH0pXHJcblxyXG5cclxuXHJcbnZhciBzZXJ2ZXIgPSBhcHAubGlzdGVuKHBvcnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGhvc3QgPSBzZXJ2ZXIuYWRkcmVzcygpLmFkZHJlc3M7XHJcbiAgICB2YXIgcG9ydCA9IHNlcnZlci5hZGRyZXNzKCkucG9ydDtcclxuICAgIGNvbnNvbGUubG9nKCdUaGlzIGV4cHJlc3MgYXBwIGlzIGxpc3RlbmluZyBvbiBwb3J0OicgKyBwb3J0KTtcclxufSk7XHJcbn0pOyJdfQ==
