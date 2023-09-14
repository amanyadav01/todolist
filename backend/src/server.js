
const http = require('http');
const mongoose = require('mongoose');
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

const PORT = process.env.PORT || 9008
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server is listening on PORT : ${PORT}`);
})