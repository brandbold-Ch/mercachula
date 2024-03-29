const express = require('express');
const app = express();
const userRouter = require("./proyecto/api/routes/userRouter");
const commerceRouter = require("./proyecto/api/routes/commerceRouter");
const authRouter = require("./proyecto/api/routes/authRouter");
const PORT = 5000;

app.get('/', (req, res) => {
    res.status(200).json({message: "Vienvenido a mercachula 🏪"});
});
app.use(express.json());
app.use('/users', userRouter);
app.use('/commerce', commerceRouter);
app.use('/auth', authRouter);
app.use((req, res) => {
    res.status(404).json({'message': 'This route not available'});
});


app.listen(PORT, () => {
    console.log("Servidor API corriendo en el puerto 5000");
});
