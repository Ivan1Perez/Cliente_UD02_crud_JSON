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
let id;
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
let modifyProdIdMsg = `Enter the id number of the product you want to modify:`;
let selectFieldsMsg = `Which field do you want to modify?\n\n`;
let prodFieldsMsg = `   - Name --> Enter '1'.\n   - Description --> Enter '2'.\n   - Category --> Enter '3'.\n   - Price --> Enter '4'.\n   - Rating --> Enter '5'.\n`;
let modifiedNameMsg = `Enter the modified name:\n`;
let modifiedDescMsg = `Enter the modified description:\n`;
let modifiedPriceMsg = `Enter the modified price:\n`;
let modifiedRatingMsg = `Enter the modified rating:\n`;
let modifyAnotherItemMsg = `Do you want to modify another item?\n`;
let yesNoMsg = `   - Yes --> Enter '1'\n   - No --> Enter '2'\n`;

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
      id = prompt(searchProdMsg);
      while (isNaN(id.trim()) || id.trim() === "") {
        id = prompt(`${noNumberError}${searchProdMsg}`);
      }
      product = products.find(searchProdById);
      console.log(`Product: ${product}`);
      if(product == undefined){
/*--------------------------------------------------ESTAMOS AQUÍ--------------------------------------------------------------------------------------*/
      }
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
      deleteProduct();
      break;

    default:
      break;
  }
}

function searchProdById(product) {
  return product.id === parseInt(id);
}

function addProduct() {
  let name, description, category, price, rating;

  name = checkedNameDesc(addProdHeaderMsg, addProdNameMsg);
  description = checkedNameDesc(addProdHeaderMsg, addProdDescMsg);
  category = checkedCategory(addProdHeaderMsg);
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

function checkedNameDesc(headerMsg, enterParamMsg) {
  let answer;

  answer = prompt(`${headerMsg}${enterParamMsg}`);
  while (answer.trim() === "") {
    answer = prompt(`${emptyFieldErrorMsg}${headerMsg}${enterParamMsg}`);
  }
  return answer;
}

function checkedCategory(headerMsg) {
  let answer;
  let category;

  answer = prompt(`${headerMsg}${selectCategoryMsg}${categoriesMsg}`);
  while (answer !== "1" && answer !== "2" && answer !== "3") {
    answer = prompt(
      `${genericErrorMsg}${headerMsg}${selectCategoryMsg}${categoriesMsg}`
    );
  }

  category = categorySelector(answer);
  return category;
}

function categorySelector(param) {
  let category;

  switch (param) {
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

function checkedPrice(headerMsg) {
  let answer;

  answer = prompt(`${headerMsg}${addProdPriceMsg}`);
  while (answer.trim() === "" || isNaN(answer.trim())) {
    answer = prompt(`${noNumberError}${headerMsg}${addProdPriceMsg}`);
  }
  return parseFloat(answer);
}

function checkedRating(headerMsg) {
  let answer;

  answer = prompt(`${headerMsg}${addProdRatingMsg}`);
  while (
    answer.trim() === "" ||
    isNaN(answer.trim()) ||
    parseFloat(answer) < 0 ||
    parseFloat(answer) > 5
  ) {
    if (answer.trim() === "" || isNaN(answer.trim())) {
      answer = prompt(`${noNumberError}${headerMsg}${addProdRatingMsg}`);
    } else if (parseFloat(answer) < 0 || parseFloat(answer) > 5) {
      answer = prompt(
        `${addProdRatingErrorMsg}${headerMsg}${addProdRatingMsg}`
      );
    }
  }
  return parseFloat(answer);
}

function modifyProduct() {
  let answer;

  answer = prompt(`${modifyProdHeaderMsg}${modifyProdIdMsg}`);
  while (answer.trim() === "" || isNaN(answer.trim())) {
    answer = prompt(`${noNumberError}${modifyProdHeaderMsg}${modifyProdIdMsg}`);
  }
  id = parseInt(answer);
  product = products.find(searchProdById);

  do {
    answer = prompt(`${modifyProdHeaderMsg}${selectFieldsMsg}${prodFieldsMsg}`);
    modificationSwitch(answer);

    answer = prompt(`${modifyAnotherItemMsg}${yesNoMsg}`);
    while (answer !== "1" && answer !== "2") {
      answer = prompt(`${genericErrorMsg}${modifyAnotherItemMsg}${yesNoMsg}`);
    }
  } while (answer === "1");

  console.log(product);
}

function modificationSwitch(field) {
  let isValid = false;

  while (!isValid) {
    switch (field) {
      case "1": //Name
        product.name = checkedNameDesc(modifyProdHeaderMsg, modifiedNameMsg);
        isValid = true;
        break;
  
      case "2": //Description
        product.description = checkedNameDesc(
          modifyProdHeaderMsg,
          modifiedDescMsg
        );
        isValid = true;
        break;
  
      case "3": //Category
        product.category = checkedCategory(modifyProdHeaderMsg);
        isValid = true;
        break;
  
      case "4": //Price
        product.price = checkedPrice(modifiedPriceMsg);
        isValid = true;
        break;
  
      case "5": //Rating
        product.rating = checkedRating(modifiedRatingMsg);
        isValid = true;
        break;
  
      default:
        field = prompt(
          `${genericErrorMsg}${modifyProdHeaderMsg}${selectFieldsMsg}${prodFieldsMsg}`
        );
        break;
    }
  }
}

function checkedNumber(headerMsg, enterMsg) {
  let answer;

  answer = prompt(`${headerMsg}${enterMsg}`);
  while (answer.trim() === "" || isNaN(answer.trim())) {
    answer = prompt(`${noNumberError}${headerMsg}${enterMsg}`);
  }
}

function deleteProduct() {
  
}

/*function optionsNumFunct(totalOptions) {
  let options = new Array();

  for(let i = 0; i < totalOptions; i++){
    options[i] = i + 1;
  }

  return options;
}*/

main();
