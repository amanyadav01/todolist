const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A Task must have a title'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    createdBy: String,
    status: String,
    priority: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
//feature update for taskmodel
// updatedAt: String
// updatedBy:String,
// plannedStartDate,
// plannedEndDate,
// actualStartDate,
// actualEndDate


//user model schema

// userId,
// firstName,
// lastName,
// middleName,
// userName,
// mobile,
// email,
// registeredAt,
// passwordHash


