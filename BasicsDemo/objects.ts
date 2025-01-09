const obj1 = {
    person:"vaishu",
    age:80
}
console.log(obj1.person)

const obj2:{
    person:string;
    age:number;
} = {
    person:"vaishu",
    age:30
}
console.log(obj2.person)

/*When you annotate a variable with object, TypeScript doesn't know what properties the object will have. 
It only knows that obj1 is some sort of object, but it doesn't know about the person or age properties.*/

// const obj1: object = {
//     person:"vaishu",
//     age:80
// }
// console.log(obj1.person)

//error : Property 'person' does not exist on type 'object'.

//Nested objects and types
const obj3 = {
    person: "vaishu",
    age:20,
    course:["Maths","Science"],
    personalDetails : {
        mobile: 9009090909,
        pin:1234
    }
}