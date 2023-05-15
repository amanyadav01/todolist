const express = require('express');
const TaskController = require('../controller/task.controller')

const taskRouter = express.Router();
taskRouter
    .get('/', TaskController.getTask)
    .post('/', TaskController.addTask)
    .get('/:id', TaskController.getTaskByID)


module.exports = taskRouter;