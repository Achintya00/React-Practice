const calcAvg = (score1, score2, score3) =>{
    let sum = score1 + score2 + score3;
    return avg = (sum)/3;
}
const winner = ()=>{
    let Dolphins = calcAvg(44,23,71);
    let Koalas = calcAvg(65,54,49);

    if(Dolphins>2*Koalas){
        return `Team Dolphins wins`;
    }else if(Koalas>2*Dolphins){
        return `Team Koala wins` 
    }else{
        return `no one wins`
    }
}
console.log(winner())