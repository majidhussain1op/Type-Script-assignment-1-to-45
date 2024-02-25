// // // console.log ("hello world");
// // // console.log("Hello Majid Hussain Meerani")

// // // let PersonName:string = ("Hello Eric, would you like to learn some python today?!")
// // // console.log(PersonName)
 
// // // let Name:string = "Majid Hussain Meerani"
// // // console.log(Name);

// // // let isTrue:boolean = false;

// // // function add(n1,n2)
// // // {
// // //     return n1+n2
// // // }

// // // let result = add(10,30)

// // // console.warn(result)

// // // let LowerCase:string = "this is my first assignment of typescript programming"

// // // console.warn("lowercase:",LowerCase.toLocaleLowerCase())

// // // let UpperCase:string = "this is my first assignment of typescript programming"

// // // console.warn("uppercase:",UpperCase.toLocaleUpperCase())

// // // //title

// // // console.warn("titleCase:", Name.replace(/\b\=/g,c=> c.toUpperCase()))

// // // //albert Einstein once said, "A person who never made a mistake never tried anything new"

// // // let quote: string = "A person who never made a mistake never tried anything new"
// // // let author: string = "albert Einstein"

// // // console.warn(`${author} once said, "${quote}"`)

// // // let famous_person: string = "Albert Einstein"
// // // let message:string = `${famous_person} once said, "${quote}"`

// // // console.warn(message);

// // // let personName: string = "\t\n  Majid Hussain \n\t"
// // // console.warn("Original:", personName);
// // // console.warn("Stripped:", personName.trim())

// // // console.warn(5+3)
// // // console.warn(10-2)
// // // console.warn(4*2)
// // // console.warn(16/2)

// // // //author [Majid Hussain Meerani]
// // // //data: [wednesday,21, 2024]

// // // //task number 9 is my favorite number

// // // let favoriteNumber: number = 4;

// // // //my favorite number in a message formate
// // // console.warn(`My favorite Number is ${favoriteNumber}.`)

// // // //Q# 11

// // // let Names : string [] = ["Majid", "Sajjad", "Atif", "Shobi"]
// // // console.log(Names[0]);
// // // console.log(Names[1]);
// // // console.log(Names[2]);
// // // console.log(Names[3]);

// // //Q# 12

// // // let Names : string [] = ["Majid", "Sajjad", "Atif", "Shobi"]
// // // let message : string = "Do you like to play football"

// // // console.log(Names[0]  + " "+ message)
// // // console.log(Names[1]  + " "+ message)
// // // console.log(Names[2]  + " "+ message)
// // // console.log(Names[3]  + " "+ message)

// // //Q # 13

// // // let transportation : string [] = ["Honda Motorcycle", "Civic", "Honda City","Lexus"]
// // // transportation.map((items)=> console.log(`I would like to own a ${items}`))

// // //Q # 14

// // // let guestArr : string [] = ["Majid", "Sajjad", "Atif"]

// // // guestArr.map((items)=> console.log(`Dear ${items}, You are invited to dinner`))

// // //Q# 15

// // // let guestArr : string [] = ["Majid", "Sajjad", "Atif", "A.Rasheed"]

// // // let canNotAttend : string = "A.Rasheed"

// // // // console.warn(canNotAttend + " " "can not attend the dinner.")

// // // let newGuest : string = "Ishaa"

// // // guestArr [guestArr.indexOf(canNotAttend)] = newGuest

// // // // console.log(guestArr)

// // // guestArr.map((items)=> console.log(`Dear ${items}, You are invited to dinner`))

// // // Q# 16

// // // let guestArr : string [] = ["Majid", "Sajjad", "Atif", "A.Rasheed"]

// // // let canNotAttend : string = "Sajjad"

// // // let newGuest : string = "Shahban"

// // // guestArr[guestArr.indexOf(canNotAttend)] = newGuest

// // // // guestArr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`), )

// // // // Part 2 begin

// // // let guestBeg : string = "Shahban"

// // // guestArr.unshift(guestBeg)

// // // // console.log(guestArr)

// // // // Part 3 middle

// // // let middleGuest : string = "Fatima"

// // // let middleIndex = guestArr.length/4
// // // guestArr.splice(middleIndex,0,middleGuest)
// // // // console.log(guestArr);

// // // guestArr.push("Hazoor Bux")
// // // // console.log(guestArr)

// // // // Part 5 

// // // guestArr.map((items)=> 
// // // console.log (`Dear ${items}, you are invited in the more people category list on dinner`))


// // // Q# 17

// // // let guests : string [] = ["Majid", "Sajjad", "Atif", "A.Rasheed"]

// // // // while (guests.length > 2) {
// // // //     const removeGuest = guests.pop();//remove the last element with the help of pop
// // // //     console.log(`Sorry, ${removeGuest}, you're no longer invited to dinner.`)
// // // // }

// // // // guests.forEach((guests) => console.log(`Dear ${guests}, you're still invited to dinner`))

// // // guests.pop()
// // // guests.pop()

// // // console.log("Final guest list",guests);

// // // Q# 18

// // let placeToVisit : string[] = ["Tokyo", "Pakistan", "America", "China", "Japan"]

// // console.log("Original order:", placeToVisit);

// // console.log("Alphabetical order:", [...placeToVisit].sort());

// // // console.log("original order after sorting:", placeToVisit);

// // // console.log("Reverse alphabetical order:", [...placeToVisit].sort().reverse());

// // // console.log("Original order after reverse sorting:", placeToVisit);

// // placeToVisit.reverse()

// // console.log("Reverse order:", placeToVisit);

// // // sort the Array in alphabetical order
// // placeToVisit.sort()
// // console.log("Sorted in alphabetical order:", placeToVisit);

// // //sort the array in reverse alphabetical order

// // placeToVisit.sort((a,b)=> b.localeCompare(a))
// // console.log("Sorted in reverse alphabetical order:", placeToVisit);

// Q# 19

// let invitations: string [] = ["Majid", "Ali"]
// let count_invitations : number = invitations.length

// console.log(`${count_invitations} people all come to the dinner`);



// //Q# 20

// // let country : string [] = ["Pakistan", "China", "Russia", "Palestine", "Saudi Arabia"];

// // console.log("List of country:");

// // console.log(country);


// // Q# 21


// // let person : {name: string, fname:string, age: number} = {name: "Majid", fname: "Male", age:34}

// // console.log(person);

// // Q# 22

// // const days : string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]

// // // console.log(days{7});

// // console.log(days[5]);

// // Q# 23

// let car = "subaru";

// console.log("is car == `subaru`? predict true");
// console.log(car == `subaru`);

// console.log("is car != 'honda city' predict true");
// console.log(car != 'honda city');


// console.log("is car == `Subaru`? predict true");
// console.log(car == `Subaru`);

// console.log("is car.length == 6? predict false");
// console.log(car.length == 6);

// console.log("is car.length == 10? predict true");
// console.log(car.length == 10);

// console.log("is car.length != 10? predict false");
// console.log(car.length != 10);

// console.log("is 3 <= 2 ? predict false");
// console.log(3 <= 2);

// console.log("is 72 <= 63? predict false");
// console.log(72 <= 63);

// console.log("is car == 'subaru' && car.length == 6? predict true");
// console.log(car == 'subaru' && car.length == 6);

// console.log("is car == 'subaru' && car.length == 8? predict true");
// console.log(car == 'subaru' && car.length == 8);

// Q# 24

let name_1 : string =  "Majid"
let name_2 : string = "Majid Hussain"
let name_3 : string = "Majid Meerani"

// if (name_1 == name_3){
//     console.log("names are equal");
    
// }else {
//     console.log("names are not equal");
    
// }

// if (name_1 != name_2){
//     console.log("names are equal");

// }

// if (name_1 != name_3){
//     console.log("names are equal");

// }
    
let age_1 : number = 18
let age_2 : number = 22
let age_3 : number = 12

// if (age_1 == 12) {
//     console.log("Eligible for vote");
    
// }else {
//     (age_2 != 18)
//         console.log("Not eligible for vote");
        
//     }
    
// if (age_1 <= age_2){
//     console.log("younger");
    
// }

// if (age_2 <= age_1){
//     console.log("older");
    
// }

// if (age_2 >= age_3){
//     console.log("Baby");
    
// }

// if (age_3 == 12 && age_2 == 22 ){
//     console.log("person is eligible for vote");
    
// }

// if (age_3 == 12 || age_2 != 22 ){
//     console.log("person is not eligible for vote");
    
// }

// let country : string [] = ["Pakistan", "Japan", "China", "Saudi Arab", "Dubai"];
// if (country.includes("Pakistan")){
//     console.log("Pakistan is in country list");
    
// }

// if (!country.includes("America")){
//     console.log("America is not in country list ");
    
// }

// Q#25

// let alien_color = "green";

 // if(alien_color == "green"){
 //     console.log("you have earn 5 points");
    
// // }

// let alien_color : string = "yellow";

// if (alien_color == "white"){
//     console.log("no output");
    
// }

//Q# 26

// let alien_color = "green";

//  if(alien_color == "green"){
//      console.log("Player just earned 5 points for shooting the alien");
//  } else{
//     console.log("Player just earned 10 points");
    
//  }

//  let alien_color_1 = "red";

//  if(alien_color_1 == "green"){
//      console.log("Player just earned 5 points for shooting the alien");
//  } else{
//     console.log("Player just earned 10 points");
    
//  }

//Q# 27

// let alien_color = "red";

// if(alien_color== "green"){
//     console.log("5 points");
// } else if (alien_color == "yellow"){
//    console.log("10 points");
   
// }else{
//     console.log("15 points");
    
// }

//Q # 28

// let age : number = 20;

// if (age < 2){
//     console.log("you are a baby");
    
// }else if (age < 4){
//     console.log("you are a toddler");
    
// }
// else if (age < 13){
//     console.log("you are a kid");
    
// }   

// else if (age < 20){
//     console.log("you are a teenager");
    
// }
// else if (age < 65){
//     console.log("you are a adult");
    
// }else {
//     console.log("you are older");
    
// }

// Q#29

// let favorite_Fruits: string [] = ["grapes", "Banana", "Apple", "orange","peach"]

// if (favorite_Fruits.includes("Apple")){
//     console.log("Apple");
    
// }

// if (favorite_Fruits.includes("Banana")){
//     console.log("Banana");
    
// }


// if (favorite_Fruits.includes("grapes")){
//     console.log("grapes");
    
// }

// if (favorite_Fruits.includes("orange")){
//     console.log("You are really like banana");
    
// }

// if (favorite_Fruits.includes("berry")){
//     console.log("You are really like orange");
    
// }

// if (favorite_Fruits.includes("grapes")){
//     console.log("You are really like orange");
    
    
// }

// Q# 30

// let users : string [] = ["eric", "Majid","Abdul Haseeb", "Ali", "fatima","admin"];

// for (let user of users){
//     if (user === "admin"){
//         console.log("Hello admin, would you like to see a status report ");

        
//     }else {
//         console.log(`Hello ${user}, thank you for login again`);
        
//     }
// }

//Q# 31

// let users : string [] = ["eric", "Majid","Abdul Haseeb", "Ali", "fatima","admin"];

// if (users.length === 0){
//     console.log("We find some users");
    
// }else{
//     for (let user of users){
//         if (user === "admin"){
//             console.log("Hello admin, would you like to see a status report");
            
//         }else{
//             console.log(`Hello ${user}, thank you for login again`);
//         }
//     }
// }

// users = []
// if (users.length === 0){
//     console.log("we need to find some users");
    
// }

// Q# 32

// let current_users : string [] = ["Admin","Majid", "Atif", "Sajjad", "Shaban", "Mehak"]

// let new_users : string [] = ["Admin", "Fatima", "Hassan", "Ishaa"]

// let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

// for (let new_user of new_users){
//     if (current_users_lower.includes(new_user.toLowerCase())){
//         console.log(`Sorry ${new_user}, that name is taken`);
        
//     }else{
//         console.log(`Yes ${new_user}, what still in available list`);


        
//     }
// }

//Q# 33

// let numbers: number [] = [1,2,3,4,5,6,7,8,9]
// for (let number of numbers)
// for (let i : number =1; i <10; i++){
    // console.log(num + "x" + i + " = " + num * i);

// if (number === 1){
//     console.log(`${number}st`);
//     }else if (number === 2 ){
//         console.log(`${number}nd`);
        
//     }else if (number === 3){
//         console.log(`${number}rd`);
        
//     }else  {
//         console.log(`${number}th`)
        
//     }
    
// }

// Q#34

// let favorite_pizza: string [] = ["pepperoni", "chicken", "veg"]

// for (let pizza of favorite_pizza){
//     console.log(pizza);
    
// }

// console.log("\n");

// for (let pizza of favorite_pizza){
//     console.log(`I really like ${pizza} pizza`);
    
// }

// console.log("\n I really love pizza!");

// Q# 35

// let animals : string [] = ["cat", "lion", "dog"]

// for (let animal of animals){
//     console.log(animal);
    
// }

// console.log("\n ");

// for (let animal of animals){
//     console.log(`A ${animal} has a tail`);
    
// }

// Q# 36

// function makeShirt(size: string, text: string): void {
//     console.log(`\n you order ${size} shirt that says ${text}`);
    
// }

// makeShirt(`large`, '"i love TypeScript"')
// makeShirt(`medium`, '"i need a big shirt"')

//Q# 37

// function makeShirt(size: string = 'large', text:string =`i love typeScript`):void{
//     console.log(`you have a order ${size}, shirt that says ${text}`);
    
// }

// // makeShirt();
// // makeShirt(`medium`)

// makeShirt(`small`, 'I need a big shirt to wear')

//Q# 38

// function describe_city(city: string, country: string = 'Pakistan'): void{
//     console.log(`${city}, is in ${country}`);
    
// }

// describe_city('karachi')
// describe_city('france', 'europe')
// describe_city('lahore', "Pakistan")

//Q# 39

// function cityCountry(city: string, country: string): string{
//     return `${city}, ${country}`
// }

// let c_1 = cityCountry(`lahore`,`pakistan`)
// let c_2 = cityCountry('tokyo', `Japan`)
// let c_3 = cityCountry('paris', 'france')

// console.log(c_1);
// console.log(c_2);
// console.log(c_3);

// Q# 40

// function makeAlbum(artist: string, title:string): {artist: string; title: string} {
//     const dictionaries = {
//         artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//         title: title.charAt(0).toUpperCase() + title.slice(1)
//     };

//     return dictionaries;
// }

// let album = makeAlbum("ali","light")
// console.log(album);

// album = makeAlbum("hamza","red")
// console.log(album);

// album = makeAlbum("sajid","green wave")
// console.log(album);


// ["1","2","3"]
// ["0","1","2"]
// .charAt{}

// Q# 41

// function show_magicians(magicians: string[]): void {

//     for (const magician of magicians)
//     console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    
// }

// // const magician: string [] =["ali","sajjad","atif","shaban"]
// // show_magicians(magician)

// // Q# 42

// function make_great(magicians: string[]): void{
//     for (let i = 0; i < magicians.length; i++ ) {
//     magicians[i] = magicians[i] + ' the great'
// }
// }

// const magicians2: string [] = ["ali","Majid","Atif","shaban"]
// // make_great(magicians2)
// // show_magicians(magicians2)

// // Q# 43

// function make_great2(magicians: string[]): string[]{
//     const greatMagicians: string[] = [];
//     for (let i = 0; i < magicians.length; i++ ) {
//       greatMagicians.push(magicians[i] + ' the great');
// }
//     return greatMagicians
// }

// const magicians3: string [] = ["ali","Majid","Atif","shaban"]
// const greatMagicians2: string[] = make_great2(magicians3)
// show_magicians(magicians3)
// show_magicians(greatMagicians2)

// Q# 44

// function sandwich(...items : string[] ): void{
//     console.log("sandwich order: ");

//     for (let i = 0; i < items.length; i++){
//         console.log(`- ${items[i]}`);
        
//     }
    
// }


// sandwich("capsicum","beef", "cheese")
// sandwich("tomato", "chicken")
// sandwich("garlic chicken", "Mayo sauce")

// console.log("enjoy yours sandwich sir/madam ");

//Q# 45

type car = {
    manufacture : string;
    model : string;
    [key: string]:any
}

function createCar(manufacture: string, model: string, optional: Record<string,any>): car{
    return{
        manufacture,
        model,
        ...optional
    }
}

const myCar: car = createCar("toyota", "corolla", {color: "white", year:"2024"})
console.log(myCar);
