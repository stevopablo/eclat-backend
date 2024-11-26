import dotenv from 'dotenv';
dotenv.config();

dotenv.config();
import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from "mongodb";
const conexao = await conectarAoBanco(process.env.CONEXAO)

export async function getInventario() {
    const db = conexao.db("eclat-database")
    const colecao = db.collection("inventario")
    return colecao.find().toArray()
}

export async function postInventario(novoItem) {
    const db = conexao.db("eclat-database")
    const colecao = db.collection("inventario")
    return colecao.insertOne()
}

export async function deleteInventario(id){
    const db = conexao.db("eclat-database")
    const colecao = db.collection("inventario")
    return colecao.deleteOne()
}