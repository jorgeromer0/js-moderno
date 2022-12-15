// Funciones en JS
// const saludar = function (nombre) {
//   return `Hola , ${nombre}`;
// };

const saludar2 = (nombre) => {
  return `Hola , ${nombre}`;
};

const saludar3 = (nombre) => `Hola , ${nombre}`;

const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Laia'));

console.log(saludar2("Laia"));
console.log(saludar3("Samuel"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "jorgeromero",
});

// console.log(getUser());

const user = getUser();
console.log(user);

// Tarea

// 1.Tranformen a una funcion de flecha.
// 2. Tiene que retornar un objecto implicito.
// 3. Prueba
const usuarioActivo = (nombre) => ({
  uid: "ABC321",
  username: nombre,
});

// const usuarioActivo2 = getUsuarioActivo('Maria');

console.log(usuarioActivo("Maria"));
