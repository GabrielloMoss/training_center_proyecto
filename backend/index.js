import express from 'express';
import connectDb from './config/db.js';
import cors from 'cors';
import trainerRoutes from './routes/trainerRoutes.js'
import memberRoutes from './routes/memberRoutes.js'

const app = express();
app.use(express.json());
connectDb();

const dominiosPermitidos = ['http://localhost:3000'];

const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            callback(null, true)
        }else {
            callback(new Error('no permitido por Cors'))
        }
    }
}
app.use(cors(corsOptions))

app.use('/api/trainer', trainerRoutes)
app.use('/api/member', memberRoutes)
 
app.listen(8080, ()=>{
    console.log('servidor funcionando en puerto 8080')
} )