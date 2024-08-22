import express from 'express';
const port = 3000;

const app = express();

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get("/hello", (req, res) => {
    res.send('Hello World!');
})
