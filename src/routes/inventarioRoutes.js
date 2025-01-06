import express from 'express';
import path from 'path';
import { addInventario, atualizarItem, buscarInventario, buscarItem, listarInventario, removerPorId } from '../Controller/inventarioController.js';
import cors from "cors"
const __dirname = path.resolve();

const corsOption = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200
  };

// app.use(cors());
const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOption)) 
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,  'index.html'));
        // res.status(200).json({message:"endpoint: /"})
    });

    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/inventario', listarInventario); 

    app.get("/buscar", buscarInventario)

    app.get('/inventario/:id', buscarItem)

    app.post('/inventario', addInventario);  

    app.put('/inventario/:id', atualizarItem); 

    app.delete('/inventario/:id', removerPorId);


};

export default routes;
