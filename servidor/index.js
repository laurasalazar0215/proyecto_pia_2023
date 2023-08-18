const express = require('express')
const app = express()
const mysql =require('mysql')
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.listen(3006, ()=>{
    console.log('server started')
})

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tamalvarezz'
})

app.get('/',(req, res)=>{
    db.query('select * from productos',
  (err,result) =>{
    if(err)console.log(err)
    else{
        res.send(result)
        console.log("metodo get",result)
    }
  }
    )
    
})

app.post('/crear', (req,res)=>{
    const id_producto = req.body.id;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const imagen = req.body.imagen;

db.query('INSERT INTO productos VALUES (?,?,?,?,?)',[id_producto,nombre,descripcion,precio,imagen]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("el producto se registro con exito")
        console.log("el producto se registro con exito",result)
    }
}
})

app.put('/edit',(req,res)=>{
    const id_producto = req.body.id;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const imagen = req.body.imagen;

db.query('UPDATE productos SET nombre=?, descripcion=?, imagen=?, idCategoria= WHERE id=?',[id_producto,nombre,descripcion,precio,imagen]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("el producto se actualizo con exito",result)
        console.log("el producto se registro con exito",result)
    }
}
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM productos WHERE id=?',id),
    (err,result)=>{
if(err)console.log(err)
else{
    res.send("Eliminar",result)
    console.log("el producto fue eliminado con exito ")
}        
    }

})