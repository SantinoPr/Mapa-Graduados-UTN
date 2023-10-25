import express from 'express';
import morgan from 'morgan';

const app=express();
const port=5173;

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//rutas

app.get("/",(req,res)=> { res.send('<h1>Funcionando</h1>') })

app.post('/crear-egresado',(req,res)=>{

    const{nombre,apellido,email, telefono,carrera, }=req.body;
    const egresado={nombre,apellido,email,telefono,carrera};
    res.json(egresado);

})


//arranco el servidor
app.listen(port, ()=>{
    console.log(`Server funcionando en http://localhost:${port}`)
})
