const express = require('express');
const cors = require('cors');
const taskRouter = require('./routes/task-routes')
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use((req, res, next) => {
    console.log("middleware is executed", req.method);
    console.log("middleware is executed", req.url);
    next()
})
app.use(express.json());
app.use('/api/v1/tasks', taskRouter);

module.exports = app;
