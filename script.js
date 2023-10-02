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
  748923,
  "Intel Core i7-13700KFtel",
  "Amazing 3.6 GHz Processor",
  "Processors",
  360,
  4.8
);
products[1] = new Product(
  446588,
  "Asus ROG Strix B550-F",
  "Super gaming motherboard",
  "Motherboard",
  280,
  4.6
);
products[2] = new Product(
  156718,
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

//Functions:

function main() {
  crudOptionSelected = optionsFunct(
    crudOptionsCompleteMsg,
    genericErrorMsg,
    answerIsValid
  );

  do {
    if (
      crudOptionSelected !== "1" &&
      crudOptionSelected !== "2" &&
      crudOptionSelected !== "3" &&
      crudOptionSelected !== "4"
    ) {
      answerIsValid = false;
      crudOptionSelected = optionsFunct(
          crudOptionsCompleteMsg,
          genericErrorMsg,
          answerIsValid
      );
    } else {
      answerIsValid = true;
    }
  } while (!answerIsValid);
}

function optionsFunct(messages, errorMsg, isValid) {
  let completeMsg = "";

  for (const message of messages) {
    completeMsg += message;
  }

  if (!isValid) {
    completeMsg = errorMsg + completeMsg;
  }

  return prompt(`${completeMsg}`);
}

main();
