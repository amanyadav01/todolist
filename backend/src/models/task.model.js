const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process?.mainModule?.filename), 'data', 'task.json');

const getAllTask = (cb) => {
    fs.readFile(p, (err, taskContent) => {
        if (err) {
            console.log("filer Err", err);
            cb([])
        }
        // console.log("filer content", JSON.parse(taskContent));
        cb(JSON.parse(taskContent))
    })
}

const getTaskDetail = (id, cb) => {
    console.log("task id", id);

    fs.readFile(p, (err, taskContent) => {
        if (err) {
            console.log("filer Err", err);
            cb([])
        }
        const taskList = JSON.parse(taskContent);
        const selectedTask = taskList?.task?.find(task => task.id === id);
        console.log("selectedTask", selectedTask);
        cb(selectedTask)
    })
}

const addNewTask = (task, cb) => {
    fs.readFile(p, (err, taskContent) => {
        if (err) {
            console.log("filer Err", err);
        }
        const taskList = JSON.parse(taskContent);
        // eslint-disable-next-line no-unused-expressions
        // taskList?.task.push({
        //     id: 56,
        //     todo: "Bake a pie with some friends",
        //     completed: false,
        //     userId: 1
        // })
        // eslint-disable-next-line
        taskList?.task.push(task)
        fs.writeFile(p, JSON.stringify(taskList), (err) => {
            console.log("something went wrong", err);
        })
        cb()
    })
}




module.exports = {
    getAllTask,
    getTaskDetail,
    addNewTask
}