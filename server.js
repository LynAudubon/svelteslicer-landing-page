const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT||3333;

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
});




app.listen(PORT, () => {
    console.log(
        `Server is running on: <a target="_blank" rel="noopener" href="http://localhost:8080">http://localhost:${PORT})</a>`
    )
});