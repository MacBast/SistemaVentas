require('dotenv').config();
const path = require('path');
const cors = require('cors');
const express =require('express');
const mongoose =require('mongoose');
const apiRoutes =require('./routes');

const app =express();
const PORT = process.env.PORT||3000;
const DB_URI = process.env.DB_URI;


mongoose.connect('mongodb://localhost:27017')
.then(db =>console.log("conexion correcta"))
.catch(error=>console.log("Conexion erronea"+ error))

app.use(cors());
app.use(express());
app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=> console.log(`Servidor iniciadoe en http://localhost:${PORT}`));

