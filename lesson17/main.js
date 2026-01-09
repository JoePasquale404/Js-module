// Задача 1.

const number = +prompt("Введите число для проверки", 0);
if (number % 2 === 0) {
  alert("Число четное");
} else if (alert("Число нечетное"));

// Задача 2.

const age = +prompt("Введите возраст", 0);

const discount =
  age < 18 ? "Скидка 10%" : age <= 65 ? "Скидка 20%" : "Скидка 30%";
alert(discount);

// // 4. *Дополнительное задание: перепишите задачу на switch-case.

const age = +prompt("Введите возраст", 0);

let discount;

switch (true) {
  case age < 18:
    discount = "10%";
    break;
  case age >= 18 && age <= 65:
    discount = "20%";
    break;
  case age > 65:
    discount = "30%";
    break;
  default:
    discount = "скидка не определена";
}

alert(`Скидка: ${discount}`);

// Задача 3.

const username = prompt("Введите имя пользователя");
const password = prompt("Введите пароль");

if (username === "admin" || ("user" && password === 123456)) {
  alert("доступ разрешен");
} else {
  alert("Доступ запрещен");
}

// *Задача 4.

const weight = +prompt("Введите вес посылки (в кг)");
const typeDelivery = prompt(
  "Введите тип доставки: Стандарт, Экспресс или Премиум"
);

let basePrice;
let finalPrice;

if (weight <= 0) {
  basePrice = "Некорректный вес посылки";
} else if (weight < 1) {
  basePrice = "5";
} else if (weight <= 5) {
  basePrice = "10";
} else if (weight > 5) {
  basePrice = "15";
}

let coff;

switch (typeDelivery) {
  case "Стандарт":
    coff = 1;
    break;

  case "Экспресс":
    coff = 1.5;
    break;
  case "Премиум":
    coff = 2;
    break;
  default:
    alert("Неверный тип доставки");
    break;
}
finalPrice = basePrice * coff;

alert(`Итоговая стоимость доставки: ${finalPrice}$`);
