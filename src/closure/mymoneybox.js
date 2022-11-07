// function moneybox(coins){
//     let saveConins=0;
//     saveConins +=coins;
//     console.log(`cantida de moneda en : $${saveConins}`);

// }
// moneybox(123);
// moneybox(135);

function moneybox(){
    let saveConins=0;
    function count(coins){
        saveConins+=coins;
        console.log(`money Box: $${saveConins}`);
    }
    return count;
}
const moneyBoxCamilo=moneybox();
moneyBoxCamilo(12)
moneyBoxCamilo(156)
moneyBoxCamilo(13)
moneyBoxCamilo(1.3)


const save=[];
function saveConin(a){
    save.push(a);
    const box = save.reduce((a,b)=>a+b);
    console.log(save)
    console.log(box);
}

saveConin(535);
saveConin(13);
saveConin(18);
saveConin(483);