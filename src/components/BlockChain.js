import React, { useState } from 'react'
import { sha256 } from 'js-sha256';
import ChainBlock from './ChainBlock'

export default function BlockChain() {

    const blocksInfo = [
        {
            blocknum: 1,
            data: '',
            nonce: 11316,
            prev: '0000000000000000000000000000000000000000000000000000000000000000'
        },
    ]

    return (
        <div className="grid grid-cols-4 gap-4">
            <ChainBlock />
            <ChainBlock />
            <ChainBlock />
            <ChainBlock />
        </div>
    )
}
