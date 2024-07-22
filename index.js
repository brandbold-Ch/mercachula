const express = require('express');
const app = express();
const cors = require("cors");
const mainDocs = require("./proyecto/api/swagger/mainDocs");
const swaggerUi = require("swagger-ui-express");
const userRouter = require("./proyecto/api/routes/userRouter");
const commerceRouter = require("./proyecto/api/routes/commerceRouter");
const authRouter = require("./proyecto/api/routes/authRouter");
const PORT = 5000;


app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type,Authorization',
}));

app.get('/', (req, res) => {
    res.status(200).json({message: "Vienvenido a mercachula 🏪"});
});
app.use(express.json());
app.use(
    "/docs-gambo",
    swaggerUi.serve,
    swaggerUi.setup(mainDocs, {
        customCssUrl: "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css",
        customCss: ".swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }"
    })
);
app.use('/users', userRouter);
app.use('/commerce', commerceRouter);
app.use('/auth', authRouter);
app.use((req, res) => {
    res.status(404).json({'message': 'This route not available'});
});


app.listen(PORT, () => {
    console.log("Servidor API corriendo en el puerto 5000");
});
