import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//     // Tarea
//     const heroe = getHeroeById(2);
//     // console.log(heroe);
//         resolve(heroe);

//         // reject('No se pot encotrar el heroe');
//     },2000)
// })

// promesa.then((heroe) => {
//     console.log('Heroe', heroe);
// })

// .catch(err => { console.warn(err); });

const getHereoByAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      const heroe = getHeroeById(id);
    //   console.log(heroe);
if (heroe) {
    resolve(heroe);
}else {
    reject('No se pot encotrar el heroe');
}



      // console.log(heroe);
      // resolve(heroe);

    }, 2000);
  });
};

getHereoByAsync(1)
.then(  console.log)
.catch( console.warn);
