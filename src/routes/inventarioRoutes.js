import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const data = [{
    name: "babadoi",
    nick: "doze"
}];

const routes = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('/dados', (req, res) => {
        res.status(200).json(data);
    });
};

export default routes;