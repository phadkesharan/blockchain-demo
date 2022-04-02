import { sha256 } from "js-sha256";


const mine = (blocknum, data, nonce) =>{

    let guess = 1;
    let total = String(blocknum) + String(guess) + data;   
    let totalHash = String(sha256(total));
    
    while(totalHash.slice(0, 4) !== '0000') {
        console.log(guess);
        guess++;
        total = String(blocknum) + String(guess) + data;
        totalHash = String(sha256(total));
    }

    console.log(guess);
    return guess;
    
}

export default mine;
