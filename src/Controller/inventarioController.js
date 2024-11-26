import { getInventario } from "../models/inventarioModels"

export async function listarInventario() {
    try{
        const inventario = await getInventario
        res.status(200).json(inventario)
    }catch(error){
        console.error(error)
        res.status(500).json({error: "erro ao listar inventario"})
    }
}


// crtl + alt + l