import { sha256 } from 'js-sha256';
import React, { useEffect, useState } from 'react'
import mine from '../Functions/mine';

export default function Block() {

    const [data, setData] = useState('');
    const [nonce, setNonce] = useState(72608);
    const [hash, setHash] = useState(sha256(String(1) + String(nonce) + data));
    const [color, setColor] = useState('bg-green-300');
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        let total = String(1) + String(nonce) + data;
        setHash(sha256(total));

        console.log("total", total);
        console.log("hash", hash);
        console.log("data", data);

        if (validate()) {
            setColor('bg-green-300');
        }

        else {
            setColor('bg-red-300');
        }

    })

    const handleDataChange = (e) => {
        setData(e.target.value);
    }

    const handleNonceChange = (e) => {
        setNonce(e.target.value);
    }

    const validate = () => {
        console.log("hash validate", hash);
        console.log(hash.slice(0, 4) === '0000');
        return hash.slice(0, 4) === '0000';
    }

    const handleClick = () => {
        if (!validate()) {
            setLoading(true);
            const result = mine(1, String(data), Number(nonce));
            console.log("result", result);
            setNonce(result);
            setLoading(false);

        }
    }

    return (

        <div className="container">

            <h1 className="text-4xl block mx-10">Block</h1>
            <div className={`container mx-10 my-2 w-500 ${color}`}>
                <label class="block text-gray-700 text-3xl font-bold mx-10 mt-5 mb-1" for="blocknum">
                    Block No
                </label>
                <input type="number" className="block mx-10 mb-5 w-4/5" value={1} />

                <label class="block text-gray-700 text-3xl font-bold mx-10 mt-5 mb-1" for="nonce">
                    Nonce
                </label>
                <input type="number" className="block mx-10 mb-5 w-4/5" value={nonce} onChange={handleNonceChange} />
                <label class="block text-gray-700 text-3xl font-bold mx-10 mb-1 mt-5" for="data">
                    Data
                </label>
                <textarea name="data" id="data" cols="129" rows="10" className="mx-10 text-xl" onChange={handleDataChange}>
                </textarea>

                <label class="block text-gray-700 text-3xl font-bold mx-10 mt-5 mb-1" for="data">
                    Hash
                </label>
                <input type="text" className="block mx-10 mb-5 w-4/5" value={hash} />
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mx-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClick}>Mine

                    {loading ? <svg role="status" class="mr-2 md-10 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                    </svg> : <div></div>}

                </button>

            </div>
        </div>
    )
}
