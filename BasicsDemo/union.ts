function add(input1: number | string, input2: number) {
    if (typeof input1 == "string" && typeof input2 == "number") {
        console.log(input1 + input2)
    }
}

//Throws an error
//TypeScript enforces type safety. Without type narrowing(explicit checking), 
//it cannot guarantee that the + operator will behave as expected for all possible types of input1 (number or string).

// function add (input1: number | string, input2: number){
//     console.log(input1+input2)
// }

add(10, 20)
add("vaishu", 20)