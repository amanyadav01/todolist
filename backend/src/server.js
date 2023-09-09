
const http = require('http');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' })

mongoose
    .connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => {
        console.log("DB connection successful!")
    }).catch(() => {
        console.warn("Db Connection unsuccessful")
    })

const taskSchema = new mongoose.Schema({
    name: String,
    description: String
})

const Task = mongoose.model('Task', taskSchema);
const newTask = new Task({
    name: 'Buy a new house decoration',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
});
newTask.save()
    .then((doc) => {
        console.log("new Doc created>>>>>>>>>> ", doc)
    })
    .catch(err => {
        console.log("Error in saving new Task")
    })


const PORT = process.env.PORT || 9008
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server is listening on PORT : ${PORT}`);
})