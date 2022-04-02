import React, { useState } from 'react'

export default function Block() {

    const [data, setData] = useState('');
    const [nonce, setNonce] = useState(72608);

    return (
        <div className="container">
            <h1 className="text-4xl block mx-10">Block</h1>
            <div className="container mx-10 my-2 bg-green-300 w-500">
                <label class="block text-gray-700 text-3xl font-bold mx-10 mt-5 mb-1" for="blocknum">
                    Block No
                </label>
                <input type="number" className="block mx-10 mb-5 w-4/5" value={1}/>

                <label class="block text-gray-700 text-3xl font-bold mx-10 mt-5 mb-1" for="nonce">
                    Nonce
                </label>
                <input type="number" className="block mx-10 mb-5 w-4/5" value={nonce}/>
                <label class="block text-gray-700 text-3xl font-bold mx-10 mb-1 mt-5" for="data">
                    Data
                </label>
                <textarea name="data"  id="data" cols="129" rows="10" className="mx-10 text-xl">
                </textarea>

                <label class="block text-gray-700 text-3xl font-bold mx-10 mt-5 mb-1" for="data">
                    Hash
                </label>
                <input type="text" className="block mx-10 mb-5 w-4/5" />
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mx-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Mine</button>
            </div>
        </div>
    )
}
