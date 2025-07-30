const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});

const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
})

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    const {originalname, mimetype, size} = req.file;
    res.json(
        {
            name: originalname,
            type: mimetype,
            size
        }
    )
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
