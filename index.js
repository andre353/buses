import express from 'express';
import {readFile} from 'node:fs/promises';
const port = 3000;

const app = express();

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get("/next-departure", async (req, res) => {

    res.send('Hello World!');
})

const loadBuses = async () => {
    const data = await readFile('./buses.json', 'utf8');
    // return JSON.parse(data);
    console.log("data: ", data);
    
}
loadBuses();
