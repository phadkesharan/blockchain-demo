import { sha256 } from "js-sha256";


const mine = ({blocknum, data}) =>{

    let guess = 1;
    let total = String(blocknum) + String(guess) + data;   
    let totalHash = String(sha256(total));
    
    while(totalHash !== '0000') {
        guess++;
        total = String(blocknum) + String(guess) + data;
        totalHash = String(sha256(total));
    }

    console.log(guess);
    return guess;
    
}

export default mine;
