const persona = {
    nombre: 'Carlos',
    apellidos: 'Mullor',
    edad: 22,
    direccion:{
        cuidad: 'Valencia',
        zip: 46856,
        lat: 14.444,
        lng: 34.4445
    }
}

// console.table(persona);



const persona2 = {...persona};
persona2.nombre = 'Pepito'

console.log(persona);
console.log(persona2);