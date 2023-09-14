const Task = require('../models/task.model');



const getTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ status: 'Success', data: tasks })
    } catch (error) {
        res.status(404).json({ status: 'Failure', message: 'Something went wrong' })
    }

}

const getTaskByID = async (req, res) => {

    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json({ status: 'Success', data: task })
    } catch (error) {
        res.status(404).json({ status: 'Failure', message: 'Something went wrong' })
    }
}


const addTask = async (req, res) => {
    const data = req?.body;
    try {
        const newTask = await Task.create(data);
        res.status(200).json({ status: 'Success', message: 'Task added successfully', data: newTask })
    } catch (error) {
        res.status(400).json({ status: 'Failure', message: 'Something went wrong' })
    }
}

const updateTask = async (req, res) => {
    const data = req?.body;
    const taskId = req.params.id;
    try {
        const task = await Task.findByIdAndUpdate(taskId, data, { new: true });
        res.status(200).json({ status: 'Success', message: 'Task updated successfully', task })
    } catch (error) {
        res.status(404).json({ status: 'Failure', message: 'Something went wrong' })
    }
}

const removeTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(204).json({ status: 'Success', message: 'Task deleted successfully' })
    } catch (error) {
        res.status(404).json({ status: 'Failure', message: 'Something went wrong' })
    }
}

module.exports = { getTask, getTaskByID, addTask, updateTask, removeTask }