var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
	body: String,
	status: { type: Boolean, default: false },
	priority: Number,
	project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
});

var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;