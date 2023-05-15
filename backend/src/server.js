
const http = require('http');
const app = require('./app');



const PORT = process.env.PORT || 9008
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server is listening on PORT 9008`);
})