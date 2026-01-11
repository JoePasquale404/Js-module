// Задача 1
const person = {
  name: "Sanya",
  age: 31,
  job: "chemistry",
};
console.log(person);

// Задача 2
const object = {
  name: "Sanya",
};

function isEmpty(object) {
  if (object === null || object === undefined) {
    return true;
  }

  for (let key in object) {
    return true; //
  }

  return false;
}

console.log(isEmpty(object));

// Задача 3.
const task = {
  title: "Text-title",
  description: "Description-text",
  isCompleted: true,
};

function cloneAndModify(object, modification) {
  const newObject = {
    ...object,
    ...modification,
  };
  return newObject;
}
const modification = {
  title: "Text-title new",
};

const newTask = cloneAndModify(task, modification);

for (let key in newTask) {
  console.log(key + ": " + newTask[key]);
}

// Задача 4.
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

function callAllMethods(myObject) {
  for (let key in myObject) {
    if (typeof myObject[key] === "function") {
      myObject[key]();
    }
  }
}

callAllMethods(myObject);
