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
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mx-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClick}>Mine</button>
                <div class="flex justify-center items-center">
                    <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
