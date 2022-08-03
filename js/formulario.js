// entidades
class Cliente {
    constructor(nombre, mail, dni, obrasocial, tel, archivo, med,obs) {
        this.nombre = nombre;
        this.mail = mail;
        this.dni = dni;
        this.obrasocial = obrasocial;
        this.tel = tel;
        this.archivo = archivo;
        this.med = med;
        this.obs = obs;
       
    }
}

// variables
let listaClientes = JSON.parse(localStorage.getItem("clientes")) || [];
let botonGuardar = document.querySelector("#button");
let tabla = document.querySelector("#tabla");

//funciones
// 1 - crear al residente nuevo
const crearCliente = () => {
    
    let nombre = document.querySelector("#nombre").value;
    let mail = document.querySelector("#mail").value;
    let dni = document.querySelector("#dni").value;
    let obrasocial = document.querySelector("#obrasocial").value;
    let tel = document.querySelector("#tel").value;
    let archivo = document.querySelector("#archivo").value;
    let med = document.querySelector("#med").value;
    let obs = document.querySelector("#obs").value;

    let clienteNuevo = new Cliente(nombre, mail, dni, obrasocial, tel, archivo, med,obs);
    listaClientes.push(clienteNuevo);
    localStorage.setItem("clientes", JSON.stringify(listaClientes));
    imprimirDatos(clienteNuevo);
    return clienteNuevo;
}

const imprimirDatos = (clienteNuevo) => {
    if (clienteNuevo != undefined) {
        tabla.innerHTML += `
            <tr>
                <td>${clienteNuevo.nombre}</td>
                <td>${clienteNuevo.mail}</td>
                <td>${clienteNuevo.dni}</td>
                <td>${clienteNuevo.obrasocial}</td>
                <td>${clienteNuevo.tel}</td>
                <td>${clienteNuevo.archivo}</td>
                <td>${clienteNuevo.med}</td>
                <td>${clienteNuevo.obs}</td>
               
                <td><button onclick="eliminarResidente(${clienteNuevo.dni})">X</button></td>
            </tr>
        `
    } else  {
        listaClientes.forEach(cliente => {
            tabla.innerHTML += `
                <tr>
                    <td>${cliente.nombre}</td>
                    <td>${cliente.mail}</td>
                    <td>${cliente.dni}</td>
                    <td>${cliente.obrasocial}</td>
                 
                    <td><button onclick="eliminarcliente(${cliente.dni})">X</button></td>
                </tr>
            `

        }) 
    }

}

    const eliminarCliente = (dni)=> {
        let listaVieja = JSON.parse(localStorage.getItem("clientes"));
        let listaNueva = listaVieja.filter(res => res.dni != dni);
        localStorage.setItem("clientes", JSON.stringify(listaNueva));
        location.reload();
    }

// eventos
botonGuardar.addEventListener("click",(e)=>{
    e.preventDefault();
    crearCliente();
})


imprimirDatos();