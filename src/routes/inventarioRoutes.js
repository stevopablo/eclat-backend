import express from 'express';
import path from 'path';
import { addInventario, atualizarItem, listarInventario, removerPorId } from '../Controller/inventarioController.js';

const __dirname = path.resolve();

// app.use(cors());
const routes = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,  'index.html'));
        // res.status(200).json({message:"endpoint: /"})
    });

    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/inventario', listarInventario); 

    app.post('/inventario', addInventario);  

    app.put('/inventario/:id', atualizarItem); 

    app.delete('/inventario/:id', removerPorId);
};

export default routes;
