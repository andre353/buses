import express from 'express';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const port = 3000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get("/next-departure", async (req, res) => {


    res.send('Hello World!');
})

const loadBuses = async () => {
    const data = await readFile(path.join(__dirname, 'buses.json'), 'utf-8');
    return JSON.parse(data); // возвращаем данные ввиде массива
}

const sendUpdatedData = async () => {
    const buses = await loadBuses();
    console.log("buses: ", buses);
}
