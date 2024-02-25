// // // console.log ("hello world");
// // // console.log("Hello Majid Hussain Meerani")
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var name_1 = "Majid";
var name_2 = "Majid Hussain";
var name_3 = "Majid Meerani";
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
var age_1 = 18;
var age_2 = 22;
var age_3 = 12;
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var myCar = createCar("toyota", "corolla", { color: "white", year: "2024" });
console.log(myCar);
