var mongoose = require('mongoose');

var ProjectSchema = mongoose.Schema({
	title: String,
	tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
	user: String
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;