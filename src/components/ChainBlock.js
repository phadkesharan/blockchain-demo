import React, { useState } from 'react'
import { sha256 } from 'js-sha256';

export default function ChainBlock() {

    const [data, setData] = useState('');
    const [nonce, setNonce] = useState(72608);
    const [hash, setHash] = useState(sha256(String(1) + String(nonce) + data));
    const [color, setColor] = useState('bg-green-300');
    const [prev, setPrev] = useState('0000000000000000000000000000000000000000000000000000000000000000');

    const handleDataChange = (e) => {
        setData(e.target.value);
    }

    const handleNonceChange = (e) => {
        setNonce(e.target.value);
    }

    return (
        <div className="container mt-4 ml-0">
            <div className={`container mx-4 my-2 max-w-sm ${color}`}>
                <label class="block text-gray-700 text-l font-bold mx-10 mt-2 mb-1" for="blocknum">
                    Block No
                </label>
                <input type="number" className="block mx-10 mb-5 w-4/6" value={1} />

                <label class="block text-gray-700 text-l font-bold ml-10 mt-2 mb-1" for="nonce">
                    Nonce
                </label>
                <input type="number" className="block mx-10 mb-5  w-4/6" value={nonce} onChange={handleNonceChange} />
                <label class="block text-gray-700 text-l font-bold ml-10 mb-1 mt-2" for="data">
                    Data
                </label>
                <textarea name="data" id="data" className="mx-10 text-l w-4/6 h-40" onChange={handleDataChange}>
                </textarea>

                <label class="block text-gray-700 text-l font-bold ml-10 mt-2 mb-1" for="data">
                    Prev
                </label>
                <input type="text" className="block mx-10 mb-5  w-4/6" value={prev} />

                <label class="block text-gray-700 text-l font-bold ml-10 mt-2 mb-1" for="data">
                    Hash
                </label>
                <input type="text" className="block ml-10 mb-5  w-4/6" value={hash} />
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mx-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Mine
                </button>

            </div>
        </div>
    )
}
