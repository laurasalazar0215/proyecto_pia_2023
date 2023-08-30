/*variables*/

let productos=[]
let id;
let nombre;
let url;

/*etiquetas html*/

const formulario = document.getElementById('form')
const nombres = document.getElementById('nombres')
const correo = document.getElementById('correo')
const terminos = document.getElementById('terminos')
const nombre_cliente = document.getElementById('nombre_cliente')
const contraseña = document.getElementById('contraseña ')
const Confirmar_contraseña = document.getElementById('Confirmar_contraseña')

/*funcion reinicio de pagina*/

document.addEventListener('DOMContentLoaded',()=>{
    actualizar.style.display ='none'
    cerrar.style.display = 'none'
})

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
})

/*insertar informacion mysql*/

const Get = async () =>{
    try{
        const respuesta = await axios.get ('http://localhost:3006/')
        productos = respuesta.data 
        console.log(respuesta)
        Card(productos)
    } catch(error){
        
    }
}

const Card =(productos) =>{
    console.log('mostrar')
    productos.forEach(data=> {
        const{id_producto,nombre,precio,categoria,stock,img}=data
        console.log('nombre')
        templateCard.querySelector('#id_card').textContent = id_producto
        templateCard.querySelector('#nombre_pro').textContent = nombre
        templateCard.querySelector('#precio_pro').textContent = precio
        templateCard.querySelector('#categoria_pro').textContent = categoria
        templateCard.querySelector('#stock_pro').textContent = stock
        templateCard.querySelector('#url_img').setAttribute('src',img)



        templateCard.getElementById('Editar').database.id=id_producto
        templateCard,getElementById('Editar').database.nombre = nombre
        templateCard,getElementById('Editar').database.precio = precio
        templateCard,getElementById('Editar').database.categoria = categoria
        templateCard,getElementById('Editar').database.stock = stock
        templateCard,getElementById('Editar').database.img = img
        
        
        templateCard.getElementById('eliminar').database.id= id_producto
        templateCard.getElementById('eliminar').database.nombre= nombre

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
        
    });
    item.appendChild(fragment)
}



    const Add =() =>{
        id= Number(document.getElementById('N_id')).Value
        nombre= document.getElementById('nombre_pro').value
        precio = Number(document.getElementById('precio_pro')).Value
        categoria = document.getElementById('categoria_pro').value
        stock = Number(document.getElementById('stock_pro')).value
        img = document.getElementById('url_img').img

        console.log('estoy guardando')

        axios.post ('http://localhost:3006/crear',{

        id_producto:id_producto,
        nombre:nombre,
        precio:precio,
        categoria:categoria,
        stock:stock,
        img:img

        }).then(()=>{
            console.log('registro ok ')

        })

    }