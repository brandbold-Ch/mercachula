module.exports = {
    "/commerce/all": {
        "get": {
            "tags": ["Commerce controllers"],
            "summary": "Obtener todos los comercios.",
            "description": "Obtener una lista de todos los comercios.",
            "responses": {
                "200": {
                    "description": "Lista de comercios.",
                    "schema": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "address": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error interno del servidor."
                }
            }
        }
    },
    "/commerce": {
        "post": {
            "tags": ["Commerce controllers"],
            "summary": "Crear un nuevo comercio.",
            "description": "Crear un nuevo comercio.",
            "parameters": [
                {
                    "name": "token",
                    "in": "query",
                    "description": "Token de acceso.",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "multipart/form-data": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "tipo": {
                                    "type": "string",
                                    "description": "Tipo de comercio."
                                },
                                "NombreComercio": {
                                    "type": "string",
                                    "description": "Nombre del comercio."
                                },
                                "Descripcion": {
                                    "type": "string",
                                    "description": "Descripción del comercio."
                                },
                                "LinkUbicacion": {
                                    "type": "string",
                                    "description": "Enlace de ubicación del comercio."
                                },
                                "NumeroContacto": {
                                    "type": "string",
                                    "description": "Número de contacto del comercio."
                                },
                                "image": {
                                    "type": "string",
                                    "format": "binary",
                                    "description": "Imagen del comercio."
                                }
                            },
                            "example": {
                                "tipo": "Ropa",
                                "NombreComercio": "Comercio Ejemplo",
                                "Descripcion": "Descripción Ejemplo",
                                "LinkUbicacion": "http://ubicacion.com",
                                "NumeroContacto": "123456789"
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Comercio creado correctamente."
                },
                "500": {
                    "description": "Error interno del servidor."
                },
                "400": {
                    "description": "Error del cliente."
                }
            }
        },
        "get": {
            "tags": ["Commerce controllers"],
            "summary": "Obtener los comercios del usuario autenticado.",
            "description": "Obtener los comercios del usuario autenticado.",
            "parameters": [
                {
                    "name": "token",
                    "in": "query",
                    "description": "Token de acceso.",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "description": "Lista de comercios del usuario.",
                    "schema": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "address": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Error interno del servidor."
                }
            }
        }
    },
    "/commerce/{commerce_id}": {
        "get": {
            "tags": ["Commerce controllers"],
            "summary": "Obtener un comercio por ID.",
            "description": "Obtener los datos de un comercio por su ID.",
            "parameters": [
                {
                    "name": "commerce_id",
                    "in": "path",
                    "description": "ID del comercio a obtener.",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "token",
                    "in": "query",
                    "description": "Token de acceso.",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "description": "Datos del comercio.",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "address": {
                                "type": "string"
                            }
                        }
                    }
                },
                "404": {
                    "description": "Comercio no encontrado."
                },
                "500": {
                    "description": "Error interno del servidor."
                }
            }
        },
        "put": {
            "tags": ["Commerce controllers"],
            "summary": "Actualizar un comercio por ID.",
            "description": "Actualizar los datos de un comercio por su ID.",
            "parameters": [
                {
                    "name": "commerce_id",
                    "in": "path",
                    "description": "ID del comercio a actualizar.",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "token",
                    "in": "query",
                    "description": "Token de acceso.",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "multipart/form-data": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "tipo": {
                                    "type": "string",
                                    "description": "Tipo de comercio."
                                },
                                "NombreComercio": {
                                    "type": "string",
                                    "description": "Nombre del comercio."
                                },
                                "Descripcion": {
                                    "type": "string",
                                    "description": "Descripción del comercio."
                                },
                                "LinkUbicacion": {
                                    "type": "string",
                                    "description": "Enlace de ubicación del comercio."
                                },
                                "NumeroContacto": {
                                    "type": "string",
                                    "description": "Número de contacto del comercio."
                                },
                                "image": {
                                    "type": "string",
                                    "format": "binary",
                                    "description": "Imagen del comercio."
                                }
                            },
                            "example": {
                                "tipo": "Ropa",
                                "NombreComercio": "Comercio Actualizado",
                                "Descripcion": "Nueva Descripción",
                                "LinkUbicacion": "http://nuevaubicacion.com",
                                "NumeroContacto": "987654321"
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Comercio actualizado correctamente."
                },
                "404": {
                    "description": "Comercio no encontrado."
                },
                "500": {
                    "description": "Error interno del servidor."
                }
            }
        },
        "delete": {
            "tags": ["Commerce controllers"],
            "summary": "Eliminar un comercio por ID.",
            "description": "Eliminar un comercio por su ID.",
            "parameters": [
                {
                    "name": "commerce_id",
                    "in": "path",
                    "description": "ID del comercio a eliminar.",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "token",
                    "in": "query",
                    "description": "Token de acceso.",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "204": {
                    "description": "Comercio eliminado."
                },
                "404": {
                    "description": "Comercio no encontrado."
                },
                "500": {
                    "description": "Error interno del servidor."
                }
            }
        }
    }
}
