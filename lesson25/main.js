
Задача 1

for(i=1; i <= 20; i++ ){
  if (i % 4 === 0){
    continue
  }
console.log(i)
}


Задача 2
const number = +prompt('Введите число');
let factorial=1;

for(i=1; i<= number; i++){
factorial = factorial * i;

}
console.log(factorial)

Задача 3
let board = '';
const size = 8;

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        board += (i + j) % 2 === 0 ? '#' : ' ';
    }
    board += '\n';
}

console.log(board);