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

let idCounter = 0;
let products = [];
products[0] = new Product(
  idCounter++,
  "Intel Core i7-13700KFtel",
  "Amazing 3.6 GHz Processor",
  "Processors",
  360,
  4.8
);
products[1] = new Product(
  idCounter++,
  "Asus ROG Strix B550-F",
  "Super gaming motherboard",
  "Motherboard",
  280,
  4.6
);
products[2] = new Product(
  idCounter++,
  "ZOTAC ZT-A30500E-10M",
  "Powerful gaming graphics card",
  "Graphics card",
  740,
  4.7
);

let crudOptionSelected;
let selectOptionsMsg = "Select one of the following options:\n";
let crudOptionsMsg =
  '   - Search --> Enter "1".\n   - Add --> Enter "2".\n   - Modify --> Enter "3".\n   - Delete --> Enter "4".\n';
let genericErrorMsg =
  "Error. The character introduced is not valid. Please. Try again.\n";
let crudOptionsCompleteMsg = new Array(selectOptionsMsg, crudOptionsMsg);
let searchProdAnswer;
let searchProdMsg = `Introduce de Id number of the product you want to search.`;
let noNumberError = `Error. The character introduced is not a number. Please, try again.\n`;
let product;
let addProdHeaderMsg = `Adding product:\n\n`;
let emptyFieldErrorMsg = `Error. This field can not be empty. Please, try again:\n`;
let addProdNameMsg = `   - Enter the name of the product`;
let addProdDescMsg = `   - Enter the description of the product:`;
let selectCategoryMsg = `   - Select one of the following categories:\n`;
let categoriesMsg = `   - Processors --> Enter "1".\n   - Motherboards --> Enter "2".\n   - Graphics cards --> Enter "3".\n`;
let addProdPriceMsg = `Enter the price (euros):`;
let addProdRatingMsg = `Enter the rating (from 0 to 5):\n`;
let addProdRatingErrorMsg = `Error. The rating must be no less than 0 and no more than 5.\n`;
let modifyProdHeaderMsg = `Modifying product:\n\n`;
let modifyProdIdMsg = `Enter the id number of the product want to modify:`;
let selectFieldsMsg = `Which fiel do you want to modify?\n\n`;
let prodFieldsMsg = `   - Name --> Enter '1'.\n   - Description --> Enter '2'.\n   - Category --> Enter '3'.\n   - Price --> Enter '4'.\n   - Rating --> Enter '5'.\n`;
let modifiedNameMsg = `Enter the modified name:\n`;
let modifiedDescMsg = `Enter the modified description:\n`;
let modifiedPriceMsg = `Enter the modified price:\n`;
let modifiedRatingMsg = `Enter the modified rating:\n`;

//Functions:

function main() {
  crudOptionSelected = prompt(`${selectOptionsMsg}${crudOptionsMsg}`);

  while (
    crudOptionSelected !== "1" &&
    crudOptionSelected !== "2" &&
    crudOptionSelected !== "3" &&
    crudOptionSelected !== "4"
  ) {
    crudOptionSelected = prompt(
      `${genericErrorMsg}${selectOptionsMsg}${crudOptionsMsg}`
    );
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
      addProduct();
      window.alert(`The product has been added succesfully.`);
      break;

    case "3":
      modifyProduct();
      window.alert(`The product has been modified succesfully.`);
      break;

    case "4":
      break;

    default:
      break;
  }
}

function searchProdById(product) {
  return product.id === parseInt(searchProdAnswer);
}

function addProduct() {
  let name, description, category, price, rating;

  name = checkedNameDesc(addProdNameMsg);
  description = checkedNameDesc(addProdDescMsg);
  category = checkedCategory();
  price = checkedPrice();
  rating = checkedRating();

  product = new Product(
    idCounter++,
    name,
    description,
    category,
    price,
    rating
  );
  products.push[product];
}

function checkedNameDesc(addMessage) {
  let answer;

  answer = prompt(`${addProdHeaderMsg}${addMessage}`);
  while (answer.trim() === "") {
    answer = prompt(`${emptyFieldErrorMsg}${addProdHeaderMsg}${addMessage}`);
  }
  return answer;
}

function checkedCategory() {
  let answer;
  let category;

  answer = prompt(`${addProdHeaderMsg}${selectCategoryMsg}${categoriesMsg}`);
  while (answer !== "1" && answer !== "2" && answer !== "3") {
    answer = prompt(
      `${genericErrorMsg}${addProdHeaderMsg}${selectCategoryMsg}${categoriesMsg}`
    );
  }

  switch (answer) {
    case "1":
      category = "Processors";
      break;

    case "2":
      category = "Motherboards";
      break;

    case "3":
      category = "Graphics cards";
      break;

    default:
      break;
  }
  return category;
}

function checkedPrice() {
  let answer;

  answer = prompt(`${addProdHeaderMsg}${addProdPriceMsg}`);
  while (answer.trim() === "" || isNaN(answer.trim())) {
    answer = prompt(`${noNumberError}${addProdHeaderMsg}${addProdPriceMsg}`);
  }
  return parseFloat(answer);
}

function checkedRating() {
  let answer;

  answer = prompt(`${addProdHeaderMsg}${addProdRatingMsg}`);
  while (
    answer.trim() === "" ||
    isNaN(answer.trim()) ||
    parseFloat(answer) < 0 ||
    parseFloat(answer) > 5
  ) {
    if (answer.trim() === "" || isNaN(answer.trim())) {
      answer = prompt(`${noNumberError}${addProdHeaderMsg}${addProdRatingMsg}`);
    } else if (parseFloat(answer) < 0 || parseFloat(answer) > 5) {
      answer = prompt(
        `${addProdRatingErrorMsg}${addProdHeaderMsg}${addProdRatingMsg}`
      );
    }
  }
  return parseFloat(answer);
}

function modifyProduct() {
  let answer;
  let id;
  let isValid = false;
  let selectedField;

  answer = prompt(`${modifyProdHeaderMsg}${modifyProdIdMsg}`);
  while (answer.trim() === "" || isNaN(answer.trim())) {
    answer = prompt(`${noNumberError}${modifyProdHeaderMsg}${modifyProdIdMsg}`);
  }
  id = parseInt(answer);

  answer = prompt(`${modifyProdHeaderMsg}${selectFieldsMsg}${prodFieldsMsg}`);
  do {
    switch (answer) {
      case "1":
        selectedField = prompt(`${modifiedNameMsg}`);
        break;

      case "2":
        selectedField = prompt(`${modifiedDescMsg}`);
        break;

      case "3":
        selectedField = prompt(`${selectCategoryMsg}${categoriesMsg}`);
        break;

      case "4":
        selectedField = prompt(`${modifiedPriceMsg}`);
        break;

      case "5":
        selectedField = prompt(`${modifiedRatingMsg}`);
        break;

      case "1": case "2": case "3": case "4": case "5":
        isValid = true;
        break;

      default:
        answer = prompt(`${genericErrorMsg}${modifyProdHeaderMsg}${selectFieldsMsg}${prodFieldsMsg}`);
        break;
    }
  } while (!isValid);
}

//commit
main();
