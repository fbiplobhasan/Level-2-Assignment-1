// 01
function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
  return value;
}

// 02
function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

// 03
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person = new Person("hasan", 25);
const person2 = new Person("abid", 14);

// 04
interface Item {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// 05
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// 06
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "Not";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

// 07
function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] {
  const uniqueValues: (number | string)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < uniqueValues.length; j++) {
      if (arr1[i] === uniqueValues[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      uniqueValues.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < uniqueValues.length; j++) {
      if (arr2[i] === uniqueValues[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      uniqueValues.push(arr2[i]);
    }
  }
  return uniqueValues;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


// 08
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      const total = product.price * product.quantity;
      if (product.discount) {
        return total * (1 - product.discount / 100);
      }
      return total;
    })
    .reduce((acc, curr) => acc + curr, 0);
}

const products: Product[] = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

