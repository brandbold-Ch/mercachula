const userDocs = require("./userDocs");
const authDocs = require("./authDocs");
const commerceDocs = require("./commerceDocs");

module.exports = {
    "openapi": "3.0.0",
    "info": {
        "title": "Mercachula API 🌿",
        "version": "1.1",
        "description": "API para PYMES"
    },
    "servers": [
        {
            "url": "http://localhost:5000"
        },
    ],
    "paths": {
        ...userDocs,
        ...authDocs,
        ...commerceDocs
    }
}
