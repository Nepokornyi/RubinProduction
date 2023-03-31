import React from 'react'
import { Blurhash } from 'react-blurhash';

function LazyHash({hash}) {

    return (
    <>
        <Blurhash  
            hash={hash}
            resolutionX={32}
            resolutionY={32}
            punch={1}
        />
    </>

    )
}

export default LazyHash