import dotenv from 'dotenv';
dotenv.config();
import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

const conexao = await conectarAoBanco(process.env.CONEXAO);

export async function getInventario() {
    try {
        const db = conexao.db("eclat-database");
        const colecao = db.collection("inventario");
        const inventario = await colecao.find().toArray();
        console.log("Inventário listado:", inventario);
        return inventario;
    } catch (error) {
        console.error("Erro ao listar inventário:", error);
        throw error;
    }
}

export async function criaInventario(item) {
    try {
        const db = conexao.db("eclat-database");
        const colecao = db.collection("inventario");
        console.log("Inserindo item:", item);
        const result = await colecao.insertOne(item);
        console.log("Item inserido com sucesso:", result);
        return result;
    } catch (error) {
        console.error("Erro ao criar item de inventário:", error);
        throw error;
    }
}

export async function deleteInventario(id) {
    try {
        const db = conexao.db("eclat-database");
        const colecao = db.collection("inventario");
        const result = await colecao.deleteOne({ _id: new ObjectId(id) });
        console.log("Item removido:", result);
        return result;
    } catch (error) {
        console.error("Erro ao remover item:", error);
        throw error;
    }
}

export async function putInventario(id, updateItem) {
    try {
        const db = conexao.db("eclat-database");
        const colecao = db.collection("inventario");
        const result = await colecao.updateOne({ _id: new ObjectId(id) }, { $set: updateItem });
        console.log("Item atualizado:", result);
        return result;
    } catch (error) {
        console.error("Erro ao atualizar item:", error);
        throw error;
    }
}

export async function getBuscaInventario(termo) {
    try {
        const db = conexao.db("eclat-database");
        const colecao = db.collection("inventario");
        
        // Convertendo o termo para minúsculas para garantir que a busca seja insensível a maiúsculas/minúsculas
        const termoBusca = termo.toLowerCase();

        // Filtrando os itens pelo nome ou descrição
        const resultados = await colecao.find({
            $or: [
                { nome: { $regex: termoBusca, $options: 'i' } },  // Busca insensível a maiúsculas/minúsculas no campo 'nome'
                { descricao: { $regex: termoBusca, $options: 'i' } }  // Busca insensível a maiúsculas/minúsculas no campo 'descricao'
            ]
        }).toArray();

        console.log("Resultados da busca:", resultados);
        return resultados;
    } catch (error) {
        console.error("Erro ao buscar itens no inventário:", error);
        throw error;
    }
}
