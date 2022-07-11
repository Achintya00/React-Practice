// const name = ['Achintya','Ishwak','Anas'];
//older version of foreach loop

// for(let x of name){
//     console.log(x);
// }

// newer version of for each, 25% slower
// specifically for arrays and it doesn't break out 

// name.forEach((e,i) => {
//     console.log(e,i)
// });

// for in loop
// so if u have an object an u want to iterate ihn that object then u should use for in
const users = {
    name: 'Achintya',
    age: 20,
    city: 'Hisar'
}
for(let x in users){
    console.log(users[x]);
}