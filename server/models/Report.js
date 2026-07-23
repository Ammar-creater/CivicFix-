const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  photoUrl: {
    type: String,
    trim: true,
    match: [/^https?:\/\/.+/, 'Please provide a valid URL for the photo']
  },
  status: {
    type: String,
    enum: {
      values: ['Reported', 'In Progress', 'Resolved'],
      message: '{VALUE} is not a valid status'
    },
    default: 'Reported',
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
}, { timestamps: true });

// Indexing for performance optimization
reportSchema.index({ status: 1 });
reportSchema.index({ createdBy: 1 });
reportSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Report', reportSchema);