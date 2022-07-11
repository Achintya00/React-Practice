const arr = [10,2,3,1];


// const arr1 = [];
// for(x of arr){
//     arr1.push(x);   
// }
// // console.log(arr1);

// // array methods
// // for length
//
// const calcTip = (bill)=> {
//     let tip = bill>=50 && bill<=300?bill*0.15:bill*0.2;
//     return tip;
// }
// const bills = [125, 555, 44];


// const jonas = {
//     name: 'jonas',
//     lastName: 'Scmedtmann',
//     age: 26,
//     DOB: 1991,
//     friends: ['Michael', 'Peter', 'Steven']

// };

// jonas.bestFriend = jonas.friends[0];
// console.log(jonas.bestFriend);

// coding challange
// let bills = [22,295,176,440,37,105,10,1100,86,52];
// let tips = [];
// let totals = [];
 
// const calcTip = (bill)=>{
//    return bill<=300 && bill>=50 ? bill * 0.15 : bill * 0.2;

// }
// for(let x = 0; x < bills.length; x++){
//     const tip = calcTip(bills[x]);
//     tips.push(tip);
//     totals.push(tip + bills[x]);
// }
// console.log(tips, totals);
console.log(Math.max.apply(null,arr));
console.log(Math.min.apply(Infinity,arr))