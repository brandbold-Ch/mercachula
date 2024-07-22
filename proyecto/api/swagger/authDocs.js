module.exports = {
    "/auth/login": {
        "post": {
            "tags": [
                "Auth controllers"
            ],
            "summary": "Iniciar sesión.",
            "description": "Autenticación de usuario.",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
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
                                "CorreoElectronico": "john@example.com",
                                "Contrasenia": "secretpassword"
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Inicio de sesión exitoso.",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "token": {
                                "type": "string",
                                "description": "Token JWT para autenticación."
                            }
                        }
                    }
                },
                "401": {
                    "description": "Contraseña incorrecta."
                },
                "404": {
                    "description": "El usuario no existe."
                },
                "403": {
                    "description": "No se enviaron las credenciales de autenticación."
                },
                "500": {
                    "description": "Error interno del servidor."
                }
            }
        }
    }
}
