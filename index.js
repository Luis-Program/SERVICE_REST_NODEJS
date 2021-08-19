const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv/config')

//import routes
const getsRoutes = require('./Routes/Get');
const postsRoutes = require('./Routes/Create');
const putsRoutes = require('./Routes/Update');
const deletesRoutes = require('./Routes/Delete');

//Middleware
app.use(cors());
app.use(bodyparser.json());


//routes
app.use('/Get',getsRoutes);
app.use('/Create', postsRoutes);
app.use('/Update', putsRoutes);
app.use('/Delete', deletesRoutes);


//DbConnection
mongoose.connect(process.env.DB_connection, { useNewUrlParser: true, useUnifiedTopology: true });


//Running port
app.listen(3000);