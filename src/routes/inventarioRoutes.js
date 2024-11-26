import express from 'express';
import path from 'path';
import { addInventario, atualizarItem, listarInventario, removerPorId } from '../Controller/inventarioController.js';

const __dirname = path.resolve();

const routes = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/inventario', listarInventario); 

    app.post('/inventario', addInventario);  

    app.put('/inventario/:id', atualizarItem); 

    app.delete('/inventario/:id', removerPorId);
};

export default routes;
