// enum Role {
//     Admin,
//     Read_Only,
//     Edit
// }

// const roles = {
//     role : Role.Edit
// }

// if(roles.role === 0){
//     console.log(roles.role)
// }

// if(roles.role === "edit"){
//     console.log(roles.role)
// }

// console.log(Role.Admin+" "+Role.Edit)

enum Role {
    Admin,
    Read_Only,
    Edit = "edit"
}

const roles = {
    role : Role.Edit
}

if(roles.role === 0){
    console.log(roles.role)
}

if(roles.role === "edit"){
    console.log(roles.role)
}

console.log(Role.Admin+" "+Role.Edit)

// In Snippet 1, TypeScript protects you by raising an error when trying to compare a number (roles.role) with a string ("edit").
// In Snippet 2, TypeScript permits the comparison because Role.Edit is explicitly a string. However, the result of comparing "edit" with 0 is false at runtime.