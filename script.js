// 1. Create variables for name, age, and nationality, then create an introduction sentence
let myName = "Opeyemi Akanni";
let myAge = 31;
let myNationality = "Nigerian";
let introduction = `Hello, my name is ${myName}. I am ${myAge} years old and I am ${myNationality}.`;

console.log(introduction);

// 2. Favorite quote or lyric, convert to uppercase and lowercase
let favoriteLyric = `I will sing
I will praise
Even in my darkest hour
Through the sorrow and the pain
I will sing
I will praise
Lift my hands to honor You
Because Your word is true
I will sing`;

let lyricUpper = favoriteLyric.toUpperCase();
let lyricLower = favoriteLyric.toLowerCase();
console.log(lyricUpper);
console.log(lyricLower);

// 3. Reverse a word and log it
let word = myName; // Using myName variable for demonstration
let reversedWord = word.split("").reverse().join("");
console.log(reversedWord);

// 4. Store prices of 3 items, calculate total and display message
let price1 = 13400;
let price2 = 12500;
let price3 = 11200;
let totalPrice = price1 + price2 + price3;
console.log("The total cost of your items is " + totalPrice.toFixed(2));

// 5. Find the average of 5 test scores and display the average
let score1 = 85;
let score2 = 90;
let score3 = 78;
let score4 = 88;
let score5 = 92;
let averageScore = (score1 + score2 + score3 + score4 + score5) / 5;
console.log(`The average test score is ${averageScore}`);

// 6. Array of 5 favorite foods, display first and last items
let favoriteFoods = [
    "Jollof Rice", "Egusi Soup", "Suya", "Pounded Yam", "Moi Moi",
];

console.log(`First favorite food: ${favoriteFoods[0]}`);
console.log(`Last favorite food: ${favoriteFoods[favoriteFoods.length - 1]}`);

// 7. Add one food to beginning and one to end, display the new list
favoriteFoods.unshift("Akara"); // Add to the beginning
favoriteFoods.push("Ofada Rice"); // Add to the end

console.log("Updated favorite foods list: " + favoriteFoods);


// 8, 9, 10. Create three arrays with 10 student names each
let jssOne = [
    "Tunde", "Kemi", "Bola", "Damilola", "Tope",
    "Segun", "Yetunde", "Bukola", "Adebayo", "Funke",
];

let jssTwo = [
    "David", "Grace", "Daniel", "Mary", "James",
    "Ruth", "John", "Elizabeth", "Matthew", "Sarah"
];
let jssThree = [
    "Amina", "Yusuf", "Fatima", "Ibrahim", "Sanni", "Halima", "Mustapha", "Zainab", "Abdulrahman", "Khadijah",
];