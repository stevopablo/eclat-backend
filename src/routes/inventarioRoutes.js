import express from 'express';
import path from 'path';
import { listarInventario } from '../Controller/inventarioController.js';

const __dirname = path.resolve();


const routes = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('/dados', listarInventario);
};

export default routes;