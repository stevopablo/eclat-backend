import { deleteInventario, getInventario, postInventario } from "../models/inventarioModels.js"

export async function listarInventario() {
    try{
        const inventario = await getInventario()
        res.status(200).json(inventario)
    }catch(error){
        console.error(error)
        res.status(500).json({error: "erro ao listar inventario"})
    }
}

export async function addInventario(req,res) {
    const item = req.body
    try{
        const addItem = await postInventario(item)
        res.status(200).json(addItem)
    }catch(error){
        res.status(500)
        console.log("🚀 ~ addInventario ~ error:", error)
    }
}

export async function removerPorId(req,res) {
    const id = res.body.id
    try{
        const result = await deleteInventario(id)
        res.status(200).json({message:"Item removido com sucesso"})
    }catch(error){
        res.status(500)
        console.log("🚀 ~ removerPorId ~ error:", error)
    }
}
// crtl + alt + l