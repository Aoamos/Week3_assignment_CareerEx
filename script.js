// 1. map() Practice
// Doubles every number in the array
const numbers = [1, 2, 3, 4, 5];
const doubleNumb = numbers.map((num) => num * 2);
console.log(doubleNumb); // [2, 4, 6, 8, 10]

// 2. filter()
// Filters ages 18 and above
const ages = [12, 25, 17, 30, 15];
const ageAbove = ages.filter((age) => age >= 18);
console.log(ageAbove); // [25, 30]

// 3. forEach()
// Logs a welcome message for each student
const students = ["Ali", "Bola", "Chidi"];
students.forEach((student) => console.log(`Welcome ${student}`));

// 4. Comparison Operators (== vs ===)
// === checks both value and type, == checks value only
const Jame = "14";

if (Jame === 14) {
  console.log("Welcome");
} else if (Jame == 14) {
  console.log("Stile Working");
} else {
  console.log("Good Work");
}

if (Number(Jame) === 14) {
  console.log("This is correct because we change it to number");
}

// 5. if/else Statement Practice
// Determines if a number is even or odd
const numb = 7;
if (Number(numb) % 2 === 1) {
  console.log(`${numb} : is an odd number`);
} else {
  console.log(`${numb} : Even number`);
}

// 6. Using ! (Negation)
// Flips each boolean value in the array
const flags = [true, false, false, true];
const newFlags = flags.map((flag) => !flag);
console.log(newFlags); // [false, true, true, false]

// 7. Function + filter() + map() Together
// Filters names starting with "A" and returns them in uppercase
const names = ["Anna", "Bob", "Andrew", "Bella"];
const nameWithA = (arr) =>
  arr.filter((name) => name.startsWith("A")).map((name) => name.toUpperCase());
console.log(nameWithA(names)); // ["ANNA", "ANDREW"]

// 8. Practical Drug Example (filter + if/else)
// Logs whether each drug is in low stock or in stock
const checkDruginStock = (drugs) => {
  drugs.filter((drug) => {
    if (drug.stock < 50) {
      console.log(`${drug.name}: Low Stock`);
    } else {
      console.log(`${drug.name}: In Stock`);
    }
  });
};

// 9. Count with forEach()
// Counts how many drugs are from Pfizer
let pfizer = 0;
drugs.forEach((drug) => {
  if (drug.manufacturer.toLowerCase() === "pfizer") {
    pfizer++;
  }
});
console.log(`Number of Pfizer drugs: ${pfizer}`);

// 10. Using All Concepts Together
// Returns drugs that match the category and have stock above a minimum value
const getDrugbyCateandStock = (category, minStock) =>
  drugs.filter(
    (drug) =>
      drug.category.toLowerCase() === category.toLowerCase() &&
      drug.stock > minStock
  );

console.log(getDrugbyCateandStock("Antibiotic", 50));
