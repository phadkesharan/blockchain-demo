import React, { useState } from 'react'
import { sha256 } from 'js-sha256';
import ChainBlock from './ChainBlock'

export default function BlockChain() {

    const blocksInfo = [
        {
            blocknum: 1,
            data: '',
            nonce: 11316,
            prev: '0000000000000000000000000000000000000000000000000000000000000000',
            hash: '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf'
        },
        {
            blocknum: 2,
            data: '',
            nonce: 35230,
            prev: '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf',
            hash: '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19'
        },
        {
            blocknum: 3,
            data: '',
            nonce: 12937,
            prev: '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19',
            hash: '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf'
        },
        {
            blocknum: 4,
            data: '',
            nonce: 35990,
            prev: '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf',
            hash: '0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83'
        }
    ]

    return (
        <div className="grid grid-cols-4 gap-4">
            {blocksInfo.map((item) => {
                return (
                    <ChainBlock
                        blocknum={item.blocknum}
                        hash={item.hash}
                        nonce={item.nonce}
                        prev={item.prev}
                        data={item.data} />
                )
            })}
        </div>
    )
}
