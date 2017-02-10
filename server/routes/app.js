var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');

var Project = require('../models/project.model');
var Task = require('../models/task.model');
var User = require('../models/user.model');

var jwt = require('express-jwt');
var configJWT = require('../config/jwt.js');
var auth = jwt({secret: configJWT.secret, userProperty: 'payload'});

var renderIndex = function(req, res) {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
}
router.get('/', renderIndex);

//get all projects for viewing on home page
router.get('/projects', auth, function(req, res, next) {
  Project
    .find({user: req.payload.username})
    .populate('tasks')
    .exec(function(err, projects) {
      if(err) return next(err);

      res.json(projects);
    });
});

//add new project
router.post('/projects', auth, (req, res, next) => {
	var project = new Project(req.body);
	project.user = req.payload.username; //determine user

	project.save((err, project) => {
		if(err) return next(err);

		res.json(project);
	});
});

router.param('project', function(req, res, next, id) {
	var query = Project.findById(id);

	query.exec(function(err, project) {
		if(err) return next(err);
		if(!project) return next(new Error("can't find a project"));

		req.project = project;
		return next();
	});
});

router.param('task', function(req, res, next, id) {
	var query = Task.findById(id);

	query.exec(function(err, task) {
		if(err) return next(err);
		if(!task) return next(new Error("can't find a task"));

		req.task = task;
		return next();
	})
})

//edit a project
router.post('/projects/:project', function(req, res, next) {
	Project.findOneAndUpdate({_id: req.project._id}, {$set: {title: req.body.title}}, {new: true}, function(err, project) {
		if(err) return next(err);

		res.json(project);
	});
});

//delete a project
router.delete('/projects/:project', function(req, res, next) {
	Task.remove({_id: {$in: req.project.tasks}}, function(err, task) {
		if(err) return next(err);
	});

	Project.findOneAndRemove({_id: req.project._id}, function(err, project) {
		if(err) return next(err);

		res.json(project);
	});
});

//add new task to a project
router.post('/projects/:project/tasks', function(req, res, next) {
	var task = new Task(req.body);
	task.project = req.project;

	task.save(function(err, task) {
		if(err) return next(err);

		req.project.tasks.push(task);
		req.project.save(function(err, project) {
			if(err) return next(err);

			res.json(task);
		});
	});
});

//edit task in a project
router.post('/projects/:project/tasks/:task', function(req, res, next) {
	Task.findOneAndUpdate({_id: req.task._id}, {$set: {body: req.body.body}},  {new: true}, function(err, task) {
		if(err) return next(err);

		res.json(task);
	});
});

//delete task
router.delete('/projects/:project/tasks/:task', function(req, res, next) {
	var priorityDelete = req.task.priority;

	Task.find({priority: {$gt: priorityDelete}, project: req.project._id}, function(err, cursor) {
		if(err) return next(err);
		cursor.forEach(function(task) {
			if(!task) return next(new Error("can\'t find a task"));

			task.priority -= 1;
			task.save(function(err, task) {
				if(err) return next(err);
			});
		
		});
	});

	Project.find({_id: req.project._id}, function(err, project) {
		if(err) return next(err);
		if(!project) return next(new Error("can\'t find a project"));

		var index = project[0].tasks.indexOf(req.task._id);
		project[0].tasks.splice(index, 1);
		project[0].save(function(err, project) {
			if(err) return next(err);
		});
	});

	Task.findOneAndRemove({_id: req.task._id}, function(err, task) {
		if(err) return next(err);

		res.json(task);
	});
});

//prioritize a task up
router.put('/projects/:project/tasks/:task/prioritizeUp', function(req, res, next) {
	var currentPriority = req.task.priority;

	Task.find({project: req.project._id, priority: currentPriority-1}, function(err, task) {
		if(err) return next(err);
		if(!task[0]) {
			res.json(req.task);
		} else {
			task[0].priority = currentPriority;
			task[0].save(function(err, task) {
				if(err) return next(err);

				Task.find({_id: req.task._id}, function(err, task) {
					if(err) return next(err);
					if(!task[0]) {
						res.json(req.task);
					} else {
						task[0].priority = currentPriority - 1;
						task[0].save(function(err, task) {
							if(err) return next(err);

							res.json(task);
						});
					}
				});
			});
		}
	});
});

//prioritize a task down
router.put('/projects/:project/tasks/:task/prioritizeDown', function(req, res, next) {
	var currentPriority = req.task.priority;

	Task.find({project: req.project._id, priority: currentPriority+1}, function(err, task) {
		if(err) return next(err);
		if(!task[0]) {
			res.json(req.task);
		} else {
			task[0].priority = currentPriority;
			task[0].save(function(err, task) {
				if(err) return next(err);

				Task.find({_id: req.task._id}, function(err, task) {
					if(err) return next(err);
					if(!task[0]) {
						res.json(req.task);
					} else {
						task[0].priority = currentPriority + 1;
						task[0].save(function(err, task) {
							if(err) return next(err);

							res.json(task);
						});
					}
				});
			});
		}
	});
});

//change task status
router.post('/projects/:project/tasks/:task/changeStatus', function(req, res, next) {
	Task.find({_id: req.task._id}, function(err, task) {
		if(err) return next(err);
		if(!task[0]) return next(new Error("can\'t find a task"));

		task[0].status = req.body.status;
		task[0].save(function(err, task) {
			if(err) return next(err);

			res.json(task);
		});
	});
});

router.post('/signup', function(req, res, next) {
	if(!req.body.username || !req.body.password) {
		return res.status(400).json({message: 'Please fill out all the fields'});
	}

	//authenticates the user
  passport.authenticate('local-signup', function(err, user, info){
    if(err){
      return next(err);
    }

    if(user){
      return res.json({token: user.generateJWT()}); //returns a token to the client
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.post('/login', function(req, res, next) {
	if(!req.body.username || !req.body.password) {
		return res.status(400).json({message: 'Please fill out all the fields'});
	}

	//authenticates the user
  passport.authenticate('local-login', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()}); //returns a token to the client
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

module.exports = router;