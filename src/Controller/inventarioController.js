import { buscarPorId, criaInventario, deleteInventario, getBuscaInventario, getInventario, putInventario } from "../models/inventarioModels.js";

export async function listarInventario(req, res) {
    try {
        const inventario = await getInventario();
        res.status(200).json(inventario);
    } catch (error) {
        console.error("Erro ao listar inventário:", error);
        res.status(500).json({ error: "Erro ao listar inventário" });
    }
}

export async function addInventario(req, res) {
    const item = req.body;
    if (!item || typeof item !== 'object') {
        return res.status(400).json({ error: "Item inválido. Verifique os dados enviados." });
    }
    try {
        const result = await criaInventario(item);
        res.status(201).json({
            message: "Item adicionado com sucesso",
            insertedId: result.insertedId
        });
    } catch (error) {
        console.error("🚀 ~ addInventario ~ error:", error);
        res.status(500).json({ error: "Erro ao adicionar item" });
    }
}

export async function removerPorId(req, res) {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "ID do item é obrigatório" });
    }
    try {
        const result = await deleteInventario(id);
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Item não encontrado" });
        }
        res.status(200).json({ message: "Item removido com sucesso" });
    } catch (error) {
        console.error("🚀 ~ removerPorId ~ error:", error);
        res.status(500).json({ error: "Erro ao remover item" });
    }
}

export async function atualizarItem(req, res) {
    const { id } = req.params;
    const updatedItem = req.body;

    if (!id || !updatedItem || typeof updatedItem !== 'object') {
        return res.status(400).json({ error: "ID e dados de atualização são obrigatórios" });
    }

    try {
        const result = await putInventario(id, updatedItem);
        if (result.modifiedCount === 0) {
            return res.status(404).json({ error: "Item não encontrado ou não alterado" });
        }
        res.status(200).json({ message: "Item atualizado com sucesso" });
    } catch (error) {
        console.error("🚀 ~ atualizarItem ~ error:", error);
        res.status(500).json({ error: "Erro ao atualizar item" });
    }
}


export async function buscarInventario(req, res) {
    const termo = req.query.termo;  // O termo de busca vem da query string

    try {
        const resultados = await getBuscaInventario(termo);
        res.status(200).json(resultados);  // Retorna os resultados para o cliente
    } catch (error) {
        res.status(500).json({ message: 'Erro ao realizar a busca'});
    }
}

export async function buscarItem(req, res) {
    const { id } = req.params;
    try {
        const item = await buscarPorId(id);
        if (!item) {
            return res.status(404).json({ error: "item não encontrado" });
        }
        res.status(200).json(item); // Corrigido para status 200
    } catch (error) {
        console.log("🚀 ~ buscarItem ~ error:", error);
        res.status(500).json({ error: "erro ao buscar" });
    }
}
