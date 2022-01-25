require('dotenv').config()
const express = require("express");
const handler = require('./comman/handle.com')
const cors = require('cors')
const http = require('http')
const path = require("path")
const app = express();

const server = http.createServer(app)

const PORT = process.env.PORT || 5020;

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }));

app.use('/api', require('./routes/index'));

app.use(express.static(path.join(__dirname,"..","..", '/edatabase_front/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/edatabase_front/build'))
);

app.use(handler.invalidRoute, handler.errorHandler)



server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

