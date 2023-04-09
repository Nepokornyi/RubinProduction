import React, { useEffect, useRef, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {encode, decode} from 'blurhash'

function LazyImage({src, alt, blurHash, className}) {

    const [canvas, setCanvas] = useState(null)
    const [isImageLoaded, setImageLoaded] = useState(false)
    const canvasRef = useRef(null)

    useEffect(() => {
        if(blurHash && canvasRef.current){
            const ctx = canvasRef.current.getContext('2d');
            const imageData = ctx.createImageData(canvasRef.current.width, canvasRef.current.height);
            imageData.data.set(decode(blurHash, canvasRef.current.width, canvasRef.current.height));
            ctx.putImageData(imageData, 0, 0);
            setCanvas(canvasRef.current.toDataURL());
        }
    }, [blurHash])

    const handleImageLoad = () => {
        setImageLoaded(true)
    }


    return (
        <>
            <canvas ref={canvasRef} width="32" height="32" style={{display: 'none'}} />
            {canvas && !isImageLoaded &&(
                <img 
                    src={canvas} 
                    alt={alt}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} />
            )}
            <LazyLoadImage src={src} alt={alt} className={className} afterLoad={handleImageLoad} />
        </>
    )
}

export default LazyImage