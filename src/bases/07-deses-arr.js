const personajes = ["Homer", "Lisa", "Bart"];

const [, , p3] = personajes;

console.log(p3);


const retornaArreglo = () =>{
    return ['ABC',123]
}

const [letras, numeros] = retornaArreglo();

console.log(letras,numeros);


// Tarea
// 1. arr= nombre
// 2. setNombre
const useState = ( valor)  => {
    return [ valor,  ()=>{ console.log('Hola Mundo');}]
}

const [ nombre ,setNombre] = useState('Mario');

console.log(nombre,setNombre);
setNombre();