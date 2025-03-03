const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  stage: { type: String, enum: ['Requested', 'To do', 'In Progress', 'Done'], default: 'Requested' },
  order: { type: Number, default: 0 },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
});

module.exports = mongoose.model('Task', taskSchema);