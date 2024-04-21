// client - a node pg client
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgresql://spinach:1234@localhost:5433/acme_store_db');

async function createTables(){

}
d
async function createProducts(){

}

async function createUser(){

}

async function fetchUsers(){

}

async function fetchProducts(){

}

async function fetchFavorites(){

}

async function createFavorite(){

}

async function destroyFavorite(){

}

module.exports = {
    client,
    createTables,
    createFavorite,
    createProducts,
    createUser,
    fetchFavorites,
    fetchUsers,
    fetchProducts,
    destroyFavorite
}