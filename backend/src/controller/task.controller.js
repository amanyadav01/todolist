const fs = require('fs');
const { getAllTask, getTaskDetail, addNewTask } = require('../models/task.model')


const getTask = (req, res) => {
    getAllTask((taskList) => {
        if (!taskList) {
            return res.status(200).json({ status: 'Success', message: 'No Task Available' })
        } else {
            res.status(200).json(taskList)
        }
    })
}

const getTaskByID = (req, res) => {
    const taskId = +req.params.id
    getTaskDetail(taskId, (task) => {
        if (!task) {
            return res.status(404).json({ status: 'Success', message: 'Task not found' })
        } else {
            res.status(200).json(task)
        }
    })
}


const addTask = (req, res) => {
    const data = req?.body;
    if (!data.name) {
        return res.status(400).json({ status: 'Failure', message: 'Task Name is missing' })
    }
    const newTask = { ...data, id: Math.floor(Math.random() * 71) + 30 }
    addNewTask(newTask, () => {
        res.status(200).json({ status: 'Success', message: 'Task added successfully' })
    })
}

module.exports = { getTask, getTaskByID, addTask }