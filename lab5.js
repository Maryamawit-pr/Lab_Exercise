// Exercise 1
function calculateDiscount(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

const formatPrice = (price) => `$${price.toFixed(2)}`;

(function () {
  const result = calculateDiscount(100, 25);
  console.log(formatPrice(result));
})();

// Exercise 2
const createCounter = () => {
  let count = 0;
  return () => ++count;
};

const counter = createCounter();
[1, 2, 3].forEach(() => {
  console.log(counter());
});

// Exercise 1
let books = ["Book1", "Book2", "Book3", "Book4", "Book5"];
books.splice(1, 1, "NewBook");
books.push("LastBook");

books.forEach((book, index) => {
  console.log(`${index + 1}: ${book}`);
});

// Exercise 2
function productOfLastThree(arr) {
  const lastThree = arr.slice(-3);
  let product = 1;
  for (let num of lastThree) {
    product *= num;
  }
  console.log(product);
}

productOfLastThree([2, 4, 6, 8, 10]);

// Exercise 1
let movie = {
  title: "Movie",
  year: 2020,
  genres: ["Action", "Drama"],
  info() {
    return `${this.title} (${this.year}): ${this.genres.join(", ")}`;
  },
};

movie.year = 2023;
movie.director = "John Doe";
console.log(movie.info());

// Exercise 2
let playlist = {
  songs: [],
  addSong(song) {
    this.songs.push(song);
    console.log(this.songs);
  },
};

playlist.addSong("Song1");
playlist.addSong("Song2");
console.log(Object.keys(playlist));

// Exercise 1
class Vehicle {
  constructor(type, speed) {
    this.type = type;
    this.speed = speed;
  }
  move() {
    return `${this.type} moves at ${this.speed} mph`;
  }
}

function Bicycle(type, speed) {
  this.type = type;
  this.speed = speed;
  this.move = function () {
    return `${this.type} moves at ${this.speed} mph`;
  };
}

const car = new Vehicle("Car", 60);
const bike = new Bicycle("Bicycle", 15);

console.log(car.move());
console.log(bike.move());

// Exercise 2
class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  describe() {
    return `${this.name} is a ${this.type}`;
  }
}

class Dog extends Pet {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }
  describe() {
    return `${this.name} is a ${this.type}, breed: ${this.breed}`;
  }
}

const rover = new Dog("Rover", "Labrador");
console.log(rover.describe());

const container = document.querySelector("#container");

for (let i = 1; i <= 4; i++) {
  const span = document.createElement("span");
  span.textContent = `Item ${i}`;
  container.appendChild(span);
}

const spans = document.querySelectorAll("#container span");
spans.forEach((span) => {
  span.style.fontWeight = "bold";
});

const myButton = document.querySelector("#myButton");
const text = document.querySelector("#text");

myButton.addEventListener("click", () => {
  text.style.display = text.style.display === "none" ? "block" : "none";
  console.log(text.style.display);
});

class Employee {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  introduce() {
    return `${this.name}, ${this.role}`;
  }
}

function Department() {
  this.employees = [];
}

Department.prototype.addEmployee = function (employee) {
  this.employees.push(employee);
};

const listRoles = (department) => department.employees.map((emp) => emp.role);

const myDept = new Department();

myDept.addEmployee(new Employee("Alice", "Manager"));
myDept.addEmployee(new Employee("Bob", "Developer"));
myDept.addEmployee(new Employee("Eve", "Designer"));

myDept.employees.forEach((emp) => {
  console.log(emp.introduce());
});

console.log(listRoles(myDept));
