// Copiar y modificar objetos en JavaScript
let a = 1
let b = a

console.log(a, b) // 1, 1

b += 1

console.log(a, b) // 1, 2

// COn objetos copia la referencia, no el valor
let car = {
  color: 'red',
  year: 2019,
  km: 0,
}

let car2 = car
car2.color = 'blue'

console.log(car, car2) // ambos objetos tienen color azul, no solo `car2`

// Copia con assign 
car = {
  color: 'red',
  year: 2019,
  km: 0,
}

car2 = Object.assign({} , car)
car2.color = 'blue'

console.log(car, car2)