/*
Create a program to search for products with the following characteristics:
• It should accept the following product features (Id, Name, Description, Category, 
Price (euros), Rating (1-5)).COMPLETED
• We should be able to search, add, modify, and delete products.
• We should be able to search for products by price (higher to lower or lower to 
higher).
• We should be able to search for products in alphabetical order (a-z and z-a).
• We should be able to search by rating (higher to lower and lower to higher).
• We should be able to filter by category and then order by price, alphabetical 
order or rating.
• The products will be stored in a JSON structure. When you perform a filtering, the 
result will be stored in a JSON structure. (extra credit
*/

class Product {
  id;
  name;
  description;
  category;
  price;
  rating;

  constructor(id, name, description, category, price, rating) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.rating = rating;
  }

  toString() {
    return `Id: ${this.id}\nName: ${this.name}\nDescription: ${this.description}\nCategory: ${this.category}\nPrice: ${this.price}\nRating: ${this.rating}\n\n`;
  }
}

let products = [];
products[0] = new Product(
  0,
  "Intel Core i7-13700KFtel",
  "Amazing 3.6 GHz Processor",
  "Processors",
  360,
  4.8
);
products[1] = new Product(
  1,
  "Asus ROG Strix B550-F",
  "Super gaming motherboard",
  "Motherboard",
  280,
  4.6
);
products[2] = new Product(
  2,
  "ZOTAC ZT-A30500E-10M",
  "Powerful gaming graphics card",
  "Graphics card",
  740,
  4.7
);

let crudOptionSelected;
let selectOptionsMsg = "Select one of the following options:\n";
let crudOptionsMsg =
  '   - Search --> Enter "1".\n   - Add --> Enter "2".\n   - Modify --> Enter "3".\n   - Delete --> Enter "4".\n\n';
let genericErrorMsg =
  "Error. The character introduced is not valid. Please. Try again.\n";
let crudOptionsCompleteMsg = new Array(selectOptionsMsg, crudOptionsMsg);
let answerIsValid = true;
let searchProdAnswer;
let searchProdMsg = `Introduce de Id number of the product you want to search.`;
let noNumberError = `Error. The character introduced is not a number. Please, try again.\n`;
let product;

//Functions:

function main() {
  crudOptionSelected = prompt(`${selectOptionsMsg}${crudOptionsMsg}`);

  while (
    crudOptionSelected !== "1" &&
    crudOptionSelected !== "2" &&
    crudOptionSelected !== "3" &&
    crudOptionSelected !== "4"
  ) {
    crudOptionSelected = prompt(`${genericErrorMsg}${selectOptionsMsg}${crudOptionsMsg}`);
  }

  switch (crudOptionSelected) {
    case "1":
      searchProdAnswer = prompt(searchProdMsg);
      while (isNaN(searchProdAnswer.trim()) || searchProdAnswer.trim() === "") {
        searchProdAnswer = prompt(`${noNumberError}${searchProdMsg}`);
      }
      product = products.find(searchProdById);
      break;

    case "2":
      break;

    case "3":
      break;

    case "4":
      break;

    default:
      break;
  }

console.log(product);

}

function searchProdById(product) {
  return product.id === 2;
}

main();
