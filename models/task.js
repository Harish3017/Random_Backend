const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:{
        type:   String,
        required: [true, "Title must be provided"],
    },
    status: {
        type: String,
        default: 'Pending',
        enum: {
            values: ['PENDING', 'In Progress', 'Completed']
        },
        required: [true, 'Task must have a status']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Tasks', taskSchema);