/*
Create a program to search for products with the following characteristics:
• It should accept the following product features (Id, Name, Description, Category, 
Price (euros), Rating (1-5)).COMPLETED
• We should be able to search, add, modify, and delete products. COMPLETED
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
  "Motherboards",
  280,
  4.6
);
products[2] = new Product(
  idCounter++,
  "ZOTAC ZT-A30500E-10M",
  "Powerful gaming graphics card",
  "Graphics cards",
  740,
  4.7
);

let crudOptionSelected;
let selectOptionsMsg = "Select one of the following options:\n";
let xToCancelMsg = "Enter 'x' to cancel.";
let crudOptionsMsg =
  '   - Search --> Enter "1".\n   - Add --> Enter "2".\n   - Modify --> Enter "3".\n   - Delete --> Enter "4".\n   - Show all products --> Enter "5"\n   - Search products by price --> Enter "6".\n   - Search products in alphabetical order --> Enter "7".\n   - Search products by rating --> Enter "8".\n   - Filter products by category --> Enter "9".\n   - Clear console --> Enter "10"\n   - Exit --> Enter "11".\n';
let genericErrorMsg =
  "Error. The character introduced is not valid. Please. Try again.\n";
let crudOptionsCompleteMsg = new Array(selectOptionsMsg, crudOptionsMsg);
let id;
let searchProdMsg = `Introduce the Id number of the product you want to search.\n`;
let noNumberError = `Error. The character introduced is not a number. Please, try again.\n`;
let notExistingProdMsg = `Error. The product doesn't exist in our stores. Please, try again.\n`;
let searchAnotherProdMsg = `Do you want to search for another product?\n`;
let product;
let addProdHeaderMsg = `Adding product:\n\n`;
let emptyFieldErrorMsg = `Error. This field can not be empty. Please, try again:\n`;
let addProdNameMsg = `   - Enter the name of the product`;
let addProdDescMsg = `   - Enter the description of the product:`;
let selectCategoryMsg = `   - Select one of the following categories:\n`;
let categories = [];
categories[0] = "Processors";
categories[1] = "Motherboards";
categories[2] = "Graphics cards";
let categoriesMsg;
let preCateogiresMsg = `   - Select one of the categories avaible --> Enter '1'\n   - Add a new category --> Enter '2'\n`;
let enterCategMsg = `Enter a new category:`;
let noNumsAllowedErrorMsg = `Error. Numbers are not allowed in this field. Please, try again.\n`;
let existsCategErrorMsg = `Error. The category entered already exists. Please, try again.\n`;
let addProdPriceMsg = `Enter the price (euros):`;
let addProdRatingMsg = `Enter the rating (from 0 to 5):\n`;
let addProdRatingErrorMsg = `Error. The rating must be no less than 0 and no more than 5.\n`;
let modifyProdHeaderMsg = `Modifying product:\n\n`;
let modifyProdIdMsg = `Enter the id number of the product you want to modify:\n`;
let modifyAnotherProdMsg = `Do you want to modify another product?\n`;
let selectFieldsMsg = `Which field do you want to modify?\n\n`;
let prodFieldsMsg = `   - Name --> Enter '1'.\n   - Description --> Enter '2'.\n   - Category --> Enter '3'.\n   - Price --> Enter '4'.\n   - Rating --> Enter '5'.\n`;
let modifiedNameMsg = `Enter the modified name:\n`;
let modifiedDescMsg = `Enter the modified description:\n`;
let modifiedPriceMsg = `Enter the modified price:\n`;
let modifiedRatingMsg = `Enter the modified rating:\n`;
let modifyAnotherItemMsg = `Do you want to modify another item?\n`;
let yesNoMsg = `   - Yes --> Enter '1'\n   - No --> Enter '2'\n`;
let deletingProdMsg = `Deleting product:\n\n`;
let deleteProdIdMsg = `Enter the id number of the product you want to delete:\n`;
let sureToDeleteMsg = `Are you sure you want to delete this product?\n\n`;
let returnDeleteProdMsg = `Go back to main menu --> Enter '1'\nGo back to the deleting section --> Enter '2'\n`;
let prodsByPriceOptsMsg = `   - Highest to lowest --> Enter '1'\n   - Lowest to highest --> Enter '2'\n`;
let prodsByAplhOptsMsg = `   - From A to Z --> Enter '1'\n   - From Z to A --> Enter '2'\n`;
let searchByOptsMsg = `   - Search products by price --> Enter "1".\n   - Search products in alphabetical order --> Enter "2".\n   - Search products by rating --> Enter "3".\n`;

//Functions:

function main() {
  JSON.stringify(products);
  let exit = false;
  let isValid;

  do {
    fillCategoriesMsg();
    isValid = false;
    crudOptionSelected = prompt(`${selectOptionsMsg}${crudOptionsMsg}`);
    while (!isValid) {
      switch (crudOptionSelected) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
          isValid = true;
          break;

        default:
          crudOptionSelected = prompt(
            `${genericErrorMsg}${selectOptionsMsg}${crudOptionsMsg}`
          );
          break;
      }
    }

    switch (crudOptionSelected) {
      case "1":
        let searchAnotherProd;
        do {
          id = prompt(`${searchProdMsg}${xToCancelMsg}`);
          checkExistingProd(searchProdMsg, "");
          if (id.toLowerCase() !== "x") {
            console.log(`${product}`);
            searchAnotherProd = prompt(`${searchAnotherProdMsg}${yesNoMsg}`);
          }
        } while (searchAnotherProd === "1");
        break;

      case "2":
        addProduct();
        window.alert(`The product has been added successfully.`);
        break;

      case "3":
        modifyProduct();
        break;

      case "4":
        deleteProduct();
        break;

      case "5":
        console.log("Products:\n");
        showProducts(products);
        break;

      case "6":
        searchProdsByPrice(products);
        break;

      case "7":
        searchProdsAlphOrder(products);
        break;

      case "8":
        searchProdsByRating(products);
        break;

      case "9":
        filterByCategory();
        break;

      case "10":
        console.clear();
        break;

      case "11":
        exit = true;
        window.alert(`Bye!`);
        break;

      default:
        break;
    }
  } while (!exit);
}

function searchProdById(product) {
  return product.id === parseInt(id);
}

function checkExistingProd(mainMsg, additionalMsg) {
  product = products.find(searchProdById);
  while (
    id.toLowerCase() !== "x" &&
    (isNaN(id.trim()) || id.trim() === "" || product == undefined)
  ) {
    if (isNaN(id.trim()) || id.trim() === "") {
      id = prompt(`${noNumberError}${mainMsg}${additionalMsg}${xToCancelMsg}`);
    } else if (product == undefined) {
      id = prompt(
        `${notExistingProdMsg}${mainMsg}${additionalMsg}${xToCancelMsg}`
      );
    }
    product = products.find(searchProdById);
  }
}

function addProduct() {
  let name, description, category, price, rating;

  name = checkedNameDesc(addProdHeaderMsg, addProdNameMsg);
  description = checkedNameDesc(addProdHeaderMsg, addProdDescMsg);
  category = selectOrIntrodCategory(addProdHeaderMsg);
  price = checkedPrice(addProdHeaderMsg);
  rating = checkedRating(addProdHeaderMsg);

  product = new Product(
    idCounter++,
    name,
    description,
    category,
    price,
    rating
  );
  products.push(product);
  JSON.stringify(products);
  console.log("Added product:\n");
  console.log(product.toString());
}

function checkedNameDesc(headerMsg, enterParamMsg) {
  let answer;

  answer = prompt(`${headerMsg}${enterParamMsg}`);
  while (answer.trim() === "") {
    answer = prompt(`${emptyFieldErrorMsg}${headerMsg}${enterParamMsg}`);
  }
  return answer;
}

function selectOrIntrodCategory(headerMsg) {
  let category;
  let answer = prompt(`${headerMsg}${selectOptionsMsg}${preCateogiresMsg}`);
  let categoryIntroduced;

  while (answer !== "1" && answer !== "2") {
    answer = prompt(
      `${headerMsg}${genericErrorMsg}${selectOptionsMsg}${preCateogiresMsg}`
    );
  }

  if (answer === "1") {
    category = checkedCategory(headerMsg);
  } else {
    categoryIntroduced = prompt(`${headerMsg}${enterCategMsg}`);
    while (
      categoryIntroduced.trim() === "" ||
      containsNumbers(categoryIntroduced) ||
      categories.includes(categoryIntroduced.toLowerCase())
    ) {
      if (categoryIntroduced.trim() === "") {
        categoryIntroduced = prompt(
          `${emptyFieldErrorMsg}${headerMsg}${enterCategMsg}`
        );
      } else if (containsNumbers(categoryIntroduced)) {
        categoryIntroduced = prompt(
          `${noNumsAllowedErrorMsg}${headerMsg}${enterCategMsg}`
        );
      } else {
        categoryIntroduced = prompt(
          `${existsCategErrorMsg}${headerMsg}${enterCategMsg}`
        );
      }
    }
    category = categoryIntroduced;
    categories.push(categoryIntroduced);
    fillCategoriesMsg();
  }

  return category;
}

function checkedCategory(headerMsg) {
  let answer;

  answer = prompt(`${headerMsg}${selectCategoryMsg}${categoriesMsg}`);
  while (parseInt(answer) > categories || parseInt(answer) < 1) {
    answer = prompt(
      `${genericErrorMsg}${headerMsg}${selectCategoryMsg}${categoriesMsg}`
    );
  }

  return categories[parseInt(answer) - 1];
}

function fillCategoriesMsg() {
  categoriesMsg = ``;
  for (let i = 0; i < categories.length; i++) {
    categoriesMsg += `   - ${categories[i]} --> Enter '${i + 1}'.\n`;
  }
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
  let modifyAnotherProd;

  do {
    id = prompt(`${modifyProdHeaderMsg}${modifyProdIdMsg}${xToCancelMsg}`);
    checkExistingProd(modifyProdHeaderMsg, modifyProdIdMsg);
    if (id.toLowerCase() !== "x") {
      product = products.find(searchProdById);
      console.log(`${product}`);

      do {
        answer = prompt(
          `${modifyProdHeaderMsg}${selectFieldsMsg}${prodFieldsMsg}`
        );
        modificationSwitch(answer);
        console.log(`${product}`);
        answer = prompt(`${modifyAnotherItemMsg}${yesNoMsg}`);
        while (answer !== "1" && answer !== "2") {
          answer = prompt(
            `${genericErrorMsg}${modifyAnotherItemMsg}${yesNoMsg}`
          );
        }
      } while (answer === "1");
      window.alert(`The product has been modified successfully.`);
      console.log("Modified product:\n");
      console.log(`${product}`);
      modifyAnotherProd = prompt(`${modifyAnotherProdMsg}${yesNoMsg}`);
      while (answer !== "1" && answer !== "2") {
        answer = prompt(`${genericErrorMsg}${modifyAnotherProdMsg}${yesNoMsg}`);
      }
    } else {
      modifyAnotherProd === "2";
      window.alert(`Product modification cancelled.`);
    }
  } while (modifyAnotherProd === "1");
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
        product.category = selectOrIntrodCategory(modifyProdHeaderMsg);
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
  let sureToDelete;
  let deleteAnotherProd;
  let index;

  do {
    id = prompt(`${deletingProdMsg}${deleteProdIdMsg}${xToCancelMsg}`);
    checkExistingProd(deletingProdMsg, deleteProdIdMsg);
    if (id.toLowerCase() !== "x") {
      product = products.find(searchProdById);
      console.log(`${product}`);

      sureToDelete = prompt(`${sureToDeleteMsg}${yesNoMsg}`);
      while (sureToDelete !== "1" && sureToDelete !== "2") {
        sureToDelete = prompt(
          `${genericErrorMsg}${sureToDeleteMsg}${yesNoMsg}`
        );
      }
      if (sureToDelete === "1") {
        index = products.indexOf(product);
        products.splice(index, 1);
        JSON.stringify(products);
        window.alert(`The product has been deleted successfully`);
        console.log("Products:\n");
        showProducts(products);
      }
      deleteAnotherProd = prompt(`${selectOptionsMsg}\n${returnDeleteProdMsg}`);
      while (deleteAnotherProd !== "1" && deleteAnotherProd !== "2") {
        deleteAnotherProd = prompt(
          `${genericErrorMsg}${selectOptionsMsg}${returnDeleteProdMsg}`
        );
      }
    } else {
      deleteAnotherProd === "1";
    }
  } while (deleteAnotherProd === "2");
}

function showProducts(products) {
  for (const element of products) {
    console.log(element.toString());
  }
}

function containsNumbers(str) {
  return /\d/.test(str);
}

function searchProdsByPrice(products) {
  let answer = prompt(`${prodsByPriceOptsMsg}`);
  while (answer !== "1" && answer !== "2") {
    answer = prompt(`${genericErrorMsg}${prodsByPriceOptsMsg}`);
  }
  let sortedProds;

  if (answer === "1") {
    sortedProds = products.toSorted((a, b) => b.price - a.price);
    console.log("Highest to lowest price products:\n");
  } else {
    sortedProds = products.toSorted((a, b) => a.price - b.price);
    console.log("Lowest to highest price products:\n");
  }

  showProducts(sortedProds);
}

function searchProdsAlphOrder(products) {
  let answer = prompt(`${prodsByAplhOptsMsg}`);
  while (answer !== "1" && answer !== "2") {
    answer = prompt(`${genericErrorMsg}${prodsByAplhOptsMsg}`);
  }
  let sortedProds;

  if (answer === "1") {
    sortedProds = products.toSorted(
      (a, b) => a.name.localeCompare(b.name)
    );
    console.log("A to Z products:\n");
  } else {
    sortedProds = products.toSorted(
      (a, b) => b.name.localeCompare(a.name)
    );
    console.log("Z to A products:\n");
  }

  showProducts(sortedProds);
}

function searchProdsByRating(products) {
  let answer = prompt(`${prodsByPriceOptsMsg}`);
  while (answer !== "1" && answer !== "2") {
    answer = prompt(`${genericErrorMsg}${prodsByPriceOptsMsg}`);
  }
  let sortedProds;

  if (answer === "1") {
    sortedProds = products.toSorted((a, b) => b.rating - a.rating);
    console.log("Highest to lowest rating products:\n");
  } else {
    sortedProds = products.toSorted((a, b) => a.rating - b.rating);
    console.log("Lowest to highest rating products:\n");
  }

  showProducts(sortedProds);
}

function filterByCategory() {
  let category = checkedCategory("");
  let prodsFiltered = products
    .filter((product) => product.category === category)
  console.log(`Products filtered by category --> [${category}]:`);
  showProducts(prodsFiltered);
  searchByOpts(prodsFiltered);
}

function searchByOpts(prodsFiltered) {
  let answer = prompt(`To filter:\n[\n${selectOptionsMsg}${searchByOptsMsg}]\nEnter 'x' to return to the main menu.`);
  while (answer.toLowerCase() !== 'x' && answer !== "1" && answer !== "2" && answer !== "3") {
    answer = prompt(`${genericErrorMsg}${selectOptionsMsg}${searchByOptsMsg}`);
  }

  switch (answer) {
    case "1":
      searchProdsByPrice(prodsFiltered);
      break;

    case "2":
      searchProdsAlphOrder(prodsFiltered);
      break;

    case "3":
      searchProdsByRating(prodsFiltered);
      break;

    default:
      break;
  }
}

main();
