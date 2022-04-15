import { sha256 } from "js-sha256";

export default findHash = ({blockNo, nonce, data, prev}) =>{
    let total = Stirng(blockNo) + String(nonce) + String(data) + String(prev);
    return sha256(total);
}
