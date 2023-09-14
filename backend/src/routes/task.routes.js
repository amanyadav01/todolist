const express = require('express');
const TaskController = require('../controller/task.controller')

const taskRouter = express.Router();
taskRouter
    .get('/', TaskController.getTask)
    .post('/', TaskController.addTask)
    .get('/:id', TaskController.getTaskByID)
    .put('/:id', TaskController.updateTask)
    .delete('/:id', TaskController.removeTask)


module.exports = taskRouter;