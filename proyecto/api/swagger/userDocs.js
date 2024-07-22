module.exports = {
    "/users": {
        "post": {
            "tags": [
                "User controllers"
            ],
            "summary": "Crear usuario.",
            "description": "Creación de usuario.",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "Nombres": {
                                    "type": "string",
                                    "description": "Nombre del usuario."
                                },
                                "Apellidos": {
                                    "type": "string",
                                    "description": "Apellido del usuario."
                                },
                                "NumeroCelular": {
                                    "type": "string",
                                    "description": "Número de celular del usuario."
                                },
                                "CorreoElectronico": {
                                    "type": "string",
                                    "description": "Correo electrónico del usuario."
                                },
                                "Contrasenia": {
                                    "type": "string",
                                    "description": "Contraseña del usuario."
                                }
                            },
                            "example": {
                                "Nombres": "John",
                                "Apellidos": "Doe",
                                "NumeroCelular": "9876543210",
                                "CorreoElectronico": "john@example.com",
                                "Contrasenia": "secretpassword"
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Usuario creado correctamente."
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
            "tags": [
                "User controllers"
            ],
            "summary": "Obtener un usuario.",
            "description": "Obtener los datos de un usuario.",
            "parameters": [
                {
                    "name": "token",
                    "in": "query",
                    "description": "token de acceso",
                    "required": true,
                    "type": "string"
                }
            ],
            "responses": {
                "200": {
                    "description": "Datos del usuario.",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "Nombres": {
                                "type": "string"
                            },
                            "Apellidos": {
                                "type": "string"
                            },
                            "NumeroCelular": {
                                "type": "string"
                            }
                        }
                    }
                },
                "400": {
                    "description": "Error del cliente."
                },
                "404": {
                    "description": "Usuario no encontrado."
                },
                "401": {
                    "description": "Sin permisos para ver esta ruta."
                },
                "500": {
                    "description": "Error interno del servidor."
                }
            }
        },
        "put": {
            "tags": [
                "User controllers"
            ],
            "summary": "Actualizar datos de usuario.",
            "description": "Actualizar datos de usuario.",
            "parameters": [
                {
                    "name": "token",
                    "in": "query",
                    "description": "token de acceso",
                    "required": true,
                    "type": "string"
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "Nombres": {
                                    "type": "string",
                                    "description": "Nombre del usuario."
                                },
                                "Apellidos": {
                                    "type": "string",
                                    "description": "Apellido del usuario."
                                },
                                "NumeroCelular": {
                                    "type": "string",
                                    "description": "Número de celular del usuario."
                                }
                            },
                            "example": {
                                "Nombres": "John",
                                "Apellidos": "Doe",
                                "NumeroCelular": "1234567890"
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Datos de usuario actualizados."
                },
                "400": {
                    "description": "Error del cliente."
                },
                "404": {
                    "description": "Usuario no encontrado."
                },
                "401": {
                    "description": "Sin permisos para ver esta ruta."
                },
                "500": {
                    "description": "Error interno del servidor."
                }
            }
        },
        "delete": {
            "tags": [
                "User controllers"
            ],
            "summary": "Eliminar un usuario.",
            "description": "Eliminar un usuario.",
            "parameters": [
                {
                    "name": "token",
                    "in": "query",
                    "description": "token de acceso",
                    "required": true,
                    "type": "string"
                }
            ],
            "responses": {
                "204": {
                    "description": "Usuario eliminado."
                },
                "400": {
                    "description": "Error del cliente."
                },
                "404": {
                    "description": "Usuario no encontrado."
                },
                "401": {
                    "description": "Sin permisos para ver esta ruta."
                },
                "500": {
                    "description": "Error interno del servidor."
                }
            }
        }
    }
}
