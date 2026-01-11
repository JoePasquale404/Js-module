Задача 1

function calculateFinalPrice(basePrice, discount, nalog) {
  const discountAmount = basePrice * (discount / 100);
  const priceAfterDiscount = basePrice - discountAmount;
  const nalogAmount = priceAfterDiscount * nalog;
  return priceAfterDiscount + nalogAmount;
}

console.log(calculateFinalPrice(322, 14, 0,2));

Задача 2

function checkAccess(userName, password) {
  if (userName === "admin" && password === "123456") {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}

console.log(checkAccess("admin", "1234576"));

Задача 3.

function getTimeOfDay(time) {

if (time>= 0 && time <=5){
  return ("Ночь")
}
else if  (time>= 6 && time <=11){
  return ("Утро")
}
else if  (time>= 12 && time <=17){
  return ("День")
}
else if  (time>= 18 && time <=23){
  return ("Вечер")
}
else return ("Некорректное время")
}

console.log(getTimeOfDay(5));

Задача 4.

function findFirstEven(start, end) {

  for (let i = start; i <= end; i++) {
    if (i % 2 == 0){
      return i;
    }
    return ("Четных чисел нет")
  }
  
}
console.log(findFirstEven(9, 9));
