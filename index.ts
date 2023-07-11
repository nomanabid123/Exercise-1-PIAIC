//Q:2

let person_name:String = "John";
console.log(
  "Hello " + person_name + ",  would you like to learn some Python today?"
);

//Q:3 name cases

person_name = "Ali";
console.log("lower case", person_name.toLowerCase());
console.log("upper case", person_name.toUpperCase());
console.log(
  "title case",
  person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase()
);

//Q:4
console.log(
  "Ali ibn Abi Talib (RA) once said, “It is easier to turn a mountain into dust than to create love in a heart that is filled with hatred.”"
);

//Q:5
const famous_person:String = "Ali ibn Abi Talib (RA) once said";
const message:String =
  "“It is easier to turn a mountain into dust than to create love in a heart that is filled with hatred.”";
console.log(famous_person + ", " + message);

//Q:6
person_name = "\tAli\t\n ";
console.log(person_name);
console.log(person_name.trim());

//Q:7
console.log(
  "Adding 4 + 4",
  4 + 4,
  "Subtracting 12 - 4",
  12 - 4,
  "Multiplying 4 * 2",
  4 * 2,
  "Dividing 16 / 2",
  16 / 2
);

//Q:8
console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);

//Q:9
let fav_num:Number = 7;
console.log("My favorite number is: " + fav_num);

//Q:10
//adding comments to the code
//my fav number
console.log("My favorite number is: " + fav_num);

//Q:11
const names:String[] = ["Haris", "Imran", "Aashir"];
names.forEach((name) => console.log(name));

//Q:12

names.forEach((name) => console.log("Hello ", name, "how's it going?"));

//Q:13
const transportation:String[] = ["car", "bike"];
transportation.forEach((transport) =>
  console.log("I would like to own a ", transport)
);

//Q:14

const guest_list:String[] = ["Hamza", "Arshad", "Aashir", "Imran", "Haris"];
guest_list.forEach((guest) =>
  console.log(guest, ", I would like to invite you to dinner on Saturday.")
);

//Q:15
console.log("Mr.", guest_list[0], "can't make it to dinner.");
guest_list[0] = "Ali";
guest_list.forEach((guest) =>
  console.log(guest, ", I would like to invite you to dinner on Saturday.")
);

//Q:16
guest_list.unshift("Zain");
guest_list.splice(guest_list.length / 2, 0, "Zohaib");
guest_list.push("Ahsan");
guest_list.forEach((guest) =>
  console.log(guest, ", I would like to invite you to dinner on Saturday.")
);

//Q:17
console.log("I can only invite two people for dinner.");
console.log("Sorry ", guest_list.pop(), "I can't invite you to dinner.");
console.log("Sorry ", guest_list.pop(), "I can't invite you to dinner.");

guest_list.forEach((guest) =>
  console.log(guest, ", I would like to invite you to dinner on Saturday.")
);

//Q:18
const places:String[] = ["Makkah", "Madina", "Karachi", "Lahore", "Islamabad"];
places.forEach((place) => console.log(place));
places.sort();
places.forEach((place) => console.log(place));
places.reverse();
places.forEach((place) => console.log(place));

//Q:19
console.log("I'm going to invite ", guest_list.length, " people to dinner.");

//Q:20
const cities:String[] = ["Makkah", "Madina", "Karachi", "Lahore", "Islamabad"];

//Q:21
interface city {
  name: string;
}
const city1: city = {
  name: "Makkah",
};
const city2: city = {
  name: "Madina",
};

//Q:22
try {
  console.log(cities[7]); // Accessing an index that is out of bounds
} catch (error) {
  console.log("Index error occurred:", error);
}

//Q:23
//Conditional tests
//1
console.log(1 == 1);
//2
console.log(1 != 1);
//3

let age:number = 20;
console.log(age > 18);
//4
console.log(age < 18);
//5
console.log(age >= 18);
//6
console.log(age <= 18);
//7
console.log(age == 18);
//8
console.log(age != 18);
//9
console.log(age === 18);
//10
console.log(age !== 18);

//Q:24
console.log("Is 1 == 1", 1 == 1);
console.log("Is 1 != 1", 1 != 1);
console.log("Is 1 > 1", 1 > 1);
console.log("Is 1 < 1", 1 < 1);

console.log("noman".toLowerCase() == "Noman".toLowerCase());

console.log(1 > 0 && 1 < 0);
console.log(1 > 0 || 1 < 0);
console.log(cities.includes("Makkah"));
console.log(cities.includes("Jaddah"));

//Q:25

let alien_color:String = "green";
if (alien_color == "green") {
  console.log("Player earned 5 points");
}

//Q:26
if (alien_color == "green") {
  console.log("Player earned 5 points");
} else {
  console.log("Player earned 10 points");
}

if (alien_color == "red") {
  console.log("Player earned 5 points");
} else {
  console.log("Player earned 10 points");
}

//Q:27
if (alien_color == "green") {
  console.log("Player earned 5 points");
} else if (alien_color == "yellow") {
  console.log("Player earned 10 points");
} else if (alien_color == "red") {
  console.log("Player earned 15 points");
}

alien_color = "yellow";
if (alien_color == "green") {
  console.log("Player earned 5 points");
} else if (alien_color == "yellow") {
  console.log("Player earned 10 points");
} else if (alien_color == "red") {
  console.log("Player earned 15 points");
}

alien_color = "red";
if (alien_color == "green") {
  console.log("Player earned 5 points");
} else if (alien_color == "yellow") {
  console.log("Player earned 10 points");
} else if (alien_color == "red") {
  console.log("Player earned 15 points");
}

//Q:28
let age1:number = 20;
if (age1 < 2) {
  console.log("Person is a toddler");
} else if (age1 >= 2 && age1 < 4) {
  console.log("Person is a kid");
} else if (age1 >= 4 && age1 < 13) {
  console.log("Person is a child");
} else if (age1 >= 13 && age1 < 20) {
  console.log("Person is a teenager");
} else if (age1 >= 20 && age1 < 65) {
  console.log("Person is an adult");
} else if (age1 >= 65) {
  console.log("Person is an elder");
}

//Q:29
let fav_fruits:String[] = ["apple", "banana", "orange", "mango", "grapes"];
if (fav_fruits.includes("apple")) {
  console.log("You really like apples");
}
if (fav_fruits.includes("banana")) {
  console.log("You really like bananas");
}
if (fav_fruits.includes("orange")) {
  console.log("You really like oranges");
}
if (fav_fruits.includes("mango")) {
  console.log("You really like mangoes");
}
if (fav_fruits.includes("grapes")) {
  console.log("You really like grapes");
}

//Q:30
let usernames:String[] = [
  "noman",
  "ali",
  "ahmed",
  "zain",
  "zohaib",
  "ahsan",
  "hamza",
  "arshad",
  "aashir",
  "imran",
  "haris",
];

usernames.forEach((username) => {
  if (username == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log("Hello ", username, ", thank you for logging in again.");
  }
});

//Q:31

if (usernames.length == 0) {
  console.log("We need to find some users!");
}
usernames = [];
if (usernames.length == 0) {
  console.log("We need to find some users!");
}

//Q:32
let current_users:String[] = [
  "noman",
  "ali",
  "ahmed",
  "zain",
  "zohaib",
  "ahsan",
  "hamza",
  "arshad",
  "aashir",
  "imran",
  "haris",
];
let new_users:String[] = ["noman", "ali", "ahmed", "zain", "shahzaib"];

new_users.forEach((new_user) => {
  if (current_users.includes(new_user)) {
    console.log("Username already exists, please enter a new username.");
  } else {
    console.log(new_user, " is available.");
  }
});

//Q:33
let numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
  if (number == 1) {
    console.log(number, "st");
  } else if (number == 2) {
    console.log(number, "nd");
  } else if (number == 3) {
    console.log(number, "rd");
  } else {
    console.log(number, "th");
  }
});

//Q:34
let pizzas:String[] = [
  "Chicken Fajita",
  "Chicken Tikka",
  "Afghani Tikka",
  "BBQ",
  "Pepperoni",
  "Cheese Lover",
  "Veggie Lover",
  "Chicken Supreme",
  "Chicken Fajita",
  "Chicken Tikka",
  "Afghani Tikka",
  "BBQ",
  "Pepperoni",
  "Cheese Lover",
  "Veggie Lover",
  "Chicken Supreme",
  "Chicken Fajita",
  "Chicken Tikka",
  "Afghani Tikka",
  "BBQ",
  "Pepperoni",
  "Cheese Lover",
  "Veggie Lover",
  "Chicken Supreme",
  "Chicken Fajita",
  "Chicken Tikka",
  "Afghani Tikka",
  "BBQ",
  "Pepperoni",
  "Cheese Lover",
  "Veggie Lover",
  "Chicken Supreme",
  "Chicken Fajita",
  "Chicken Tikka",
  "Afghani Tikka",
  "BBQ",
  "Pepperoni",
  "Cheese Lover",
  "Veggie Lover",
  "Chicken Supreme",
  "Chicken Fajita",
  "Chicken Tikka",
  "Afghani Tikka",
  "BBQ",
  "Pepperoni",
  "Cheese Lover",
  "Veggie Lover",
  "Chicken Supreme",
  "Chicken Fajita",
  "Chicken Tikka",
  "Afghani Tikka",
  "BBQ",
  "Pepperoni",
  "Cheese Lover",
  "Veggie Lover",
  "Chicken Supreme",
];
pizzas.forEach((pizza) => {
  console.log("i Like ", pizza, " pizza");
});
console.log("I love ", pizzas[0], " pizza\n i really love this pizza\n");

//Q:35
const animals:String[] = ["cat", "dog", "cow"];
animals.forEach((animal) => {
  console.log("A ", animal, " would make a great pet.");
});

console.log("Any of these animals would make a great pet.");

//Q:36
function make_shirt(size = "large", message = "I love TypeScript") {
  console.log(`Shirt size: ${size.toUpperCase()}`);
  console.log(`Message: ${message}`);
}
make_shirt();

// Q:37
make_shirt("medium");
make_shirt("small", "Hello, World!");

// Q:38
const describe_country = (city: string, country: string = "Pakistan") => {
  console.log(`${city} is in ${country}`);
};
describe_country("Karachi");
describe_country("Lahore");
describe_country("London", "UK");

// Q:39
const city_country = (city: string, country: string = "Pakistan") => {
  return `${city}, ${country}`;
};
console.log(city_country("Karachi"));
console.log(city_country("Lahore"));
console.log(city_country("London", "UK"));

// Q:40
const make_album = (artist: string, album: string, tracks: number = 0) => {
  if (tracks > 0) {
    return {
      artist,
      album,
      tracks,
    };
  } else {
    return {
      artist,
      album,
    };
  }
};
console.log(make_album("Atif Aslam", "Doorie", 12));
console.log(make_album("Atif Aslam", "Doorie"));

// Q:41
const magicians:String[] = ["Harry Houdini", "David Copperfield", "Teller", "Dynamo"];

const show_magicians = (magicians: String[]) => {
  magicians.forEach((magician) => {
    console.log(magician);
  });
};

show_magicians(magicians);

// Q:42
const make_great = (magicians: String[]) => {
  let great_magicians: String[] = [];
  magicians.forEach((magician) => {
    great_magicians.push(`The Great ${magician}`);
  });
  return great_magicians;
};

const great_magicians = make_great(magicians);
show_magicians(great_magicians);

// Q:43
const magician_names = [...magicians];
show_magicians(magician_names);
const great_magician_names = make_great(magician_names);
show_magicians(great_magician_names);

// Q:44

const make_sandwich = (items: String[]) => {
  console.log("Sandwich is being prepared...");
  items.forEach((item) => {
    console.log("Adding ", item);
  });
  console.log("Sandwich is ready!");
};

make_sandwich(["bread", "cheese", "chicken", "mayo", "bread"]);
make_sandwich(["bread", "cheese", "mayo", "bread"]);
make_sandwich(["bread", "cheese", "chicken", "bread"]);

// Q:45
const make_car = (
  manufactuere: String,
  model: String,
  ...options: String[]
) => {
  const car = {
    manufactuere,
    model,
    options,
  };
  return car;
};

const car = make_car(
  "Honda",
  "Civic",
  "Power Windows",
  "Power Steering",
  "Power Mirrors",
  "Power Locks",
  "Keyless Entry",
  "Alloy Rims",
  "ABS",
  "Airbags"
);
console.log(car);
