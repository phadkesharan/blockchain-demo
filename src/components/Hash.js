import { useState } from "react";
import { sha256 } from "js-sha256";

export default function Hash() {

    const [hashcode, setHashcode] = useState(sha256(""));

    const handleChange = (e) =>{
        setHashcode(sha256(e.target.value));
    }

    return (

        <div className="container">
            <h1 className="text-4xl block mx-10">SHA256</h1>
            <div className="container mx-10 my-2 bg-gray-100 w-500">
                <label class="block text-gray-700 text-3xl font-bold mx-10 mb-1 mt-5" for="data">
                    Data
                </label>
                <textarea name="data" onChange={handleChange} id="data" cols="129" rows="10" className="mx-10 text-xl">
                </textarea>

                <label class="block text-gray-700 text-3xl font-bold mx-10 mt-5 mb-1" for="data">
                    Hash
                </label>
                <input type="text" className="block mx-10 mb-5 w-4/5" value={hashcode}/>
            </div>
        </div>


    )
}
