# Inventory Management API

This is an Inventory Management API built with Node.js, Express, and MongoDB. It provides endpoints to manage inventory items, allowing you to perform CRUD (Create, Read, Update, Delete) operations.

## Features

- **List Inventory**: Retrieve all items from the inventory.
- **Add Item**: Add a new item to the inventory.
- **Update Item**: Update an existing item in the inventory.
- **Delete Item**: Remove an item from the inventory by ID.

## Technologies Used

- **Node.js**: JavaScript runtime to build the server-side application.
- **Express.js**: Framework for building the API.
- **MongoDB**: NoSQL database to store the inventory data.
- **Mongoose (Optional)**: ODM library to interact with MongoDB.



4. Create a `.env` file in the root directory and add your MongoDB connection string:

    ```env
    CONEXAO=mongodb+srv://your-username:your-password@cluster.mongodb.net/your-database-name?retryWrites=true&w=majority
    ```

## Running the Server

1. Start the server:

    ```bash
    npm start
    ```

2. The server will be running on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### `GET /inventario`
Retrieve all items from the inventory.

**Response:**
- `200 OK`: Returns a list of inventory items.

### `POST /inventario`
Add a new item to the inventory.

**Request Body:**
```json
{
    "urlImg": "url",
    "nota": "10",
    "preco": "100"
}

