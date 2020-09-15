//1a
// function sum(x, y){
//     try{
//         if(typeof x !== 'number'){
//             throw "x is not a number"
//         }
//         else if(typeof y !== 'number'){
//             throw "y is not a number"
//         }else{
//             throw "inputs are numbers"
//         }
       
//     } catch(err){
//         console.log(err)
//     }
//     return x + y
// }

//sum(4, 5)
//1b
// try{
//     sum(1, 2)
// } 
// catch(err){
//     console.log(err)
// }

//2a
var user = {username: "sam", password: "123abc"};
function login(username, password){
    try{
        if(username === user.username && password === user.password){
            throw "login successful"
        }else{
            throw "login unsuccessful"
    }
}
catch(err){
    console.log(err)
    }
}
//login("sam", "123abc")

// try{
//     login("sam", "123abc")
// }catch(err){
//     console.log(err)
// }
try{
    login("simp", "123abc")
}catch(err){
    console.log(err)
}
