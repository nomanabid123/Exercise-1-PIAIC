//Q:2

let person_name = "John";
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
const famous_person = "Ali ibn Abi Talib (RA) once said";
const message =
  "“It is easier to turn a mountain into dust than to create love in a heart that is filled with hatred.”";
console.log(famous_person + ", " + message);

//Q:6
person_name = "\tAli\t\n ";
console.log(person_name);
console.log(person_name.trim());

//Q:7
console.log("Adding 4 + 4", 4 + 4, "Subtracting 12 - 4", 12 - 4, "Multiplying 4 * 2", 4 * 2, "Dividing 16 / 2", 16 / 2);

//Q:8
console.log(4+4)
console.log(12-4)
console.log(4*2)
console.log(16/2)

//Q:9
let fav_num = 7;
console.log("My favorite number is: " + fav_num);

//Q:10
//adding comments to the code
//my fav number
console.log("My favorite number is: " + fav_num);

//Q:11
const names = ["Haris","Imran","Aashir"];
names.forEach(name=>console.log(name))

//Q:12

names.forEach(name=>console.log("Hello ",name,"how's it going?"))

//Q:13
const transportation = ["car","bike"];
transportation.forEach(transport=>console.log("I would like to own a ",transport))

//Q:14

const guest_list = ['Hamza','Arshad','Aashir','Imran','Haris'];
guest_list.forEach(guest=>console.log(guest,", I would like to invite you to dinner on Saturday."))

//Q:15
console.log("Mr.",guest_list[0],"can't make it to dinner.")
guest_list[0] = "Ali"
guest_list.forEach(guest=>console.log(guest,", I would like to invite you to dinner on Saturday."))

//Q:16
guest_list.unshift("Zain")
guest_list.splice(guest_list.length/2,0,"Zohaib")
guest_list.push("Ahsan")
guest_list.forEach(guest=>console.log(guest,", I would like to invite you to dinner on Saturday."))

//Q:17  
console.log("I can only invite two people for dinner.")
console.log("Sorry ",guest_list.pop(),"I can't invite you to dinner.")
console.log("Sorry ",guest_list.pop(),"I can't invite you to dinner.")

guest_list.forEach(guest=>console.log(guest,", I would like to invite you to dinner on Saturday."))

//Q:18
const places = ["Makkah","Madina","Karachi","Lahore","Islamabad"]
places.forEach(place=>console.log(place))
places.sort()
places.forEach(place=>console.log(place))
places.reverse()
places.forEach(place=>console.log(place))

//Q:19
console.log("I'm going to invite ",guest_list.length," people to dinner.")

//Q:20
const cities = ["Makkah","Madina","Karachi","Lahore","Islamabad"]

//Q:21
interface city {
    name:string,
}
const city1:city = {
    name:"Makkah"
}
const city2:city = {
    name:"Madina"
}

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

let age = 20;
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
console.log("Is 1 == 1",1 == 1);
console.log("Is 1 != 1",1 != 1);
console.log("Is 1 > 1",1 > 1);
console.log("Is 1 < 1",1 < 1);

console.log("noman".toLowerCase() == "Noman".toLowerCase());

console.log(1>0 && 1<0);
console.log(1>0 || 1<0);
console.log(cities.includes("Makkah"))
console.log(cities.includes("Jaddah"))


