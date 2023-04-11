import React, {useState, useEffect, useRef} from 'react'
import { DefaultPlayer as Video} from 'react-html5video'
import { decode } from 'blurhash'


function LazyVideo({src, blurHash, className, onPlayPauseClick, customPlayer = false}) {
    const [canvas, setCanvas] = useState(null);
    const [isVideoLoaded, setVideoLoaded] = useState(false);
    const canvasRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if(blurHash && canvasRef.current){
            const ctx = canvasRef.current.getContext('2d');
            const imageData = ctx.createImageData(canvasRef.current.width, canvasRef.current.height);
            imageData.data.set(decode(blurHash, canvasRef.current.width, canvasRef.current.height));
            ctx.putImageData(imageData, 0, 0);
            setCanvas(canvasRef.current.toDataURL());
        }
    }, [blurHash])

    useEffect(() => {
        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    videoRef.current.src = src;
                    observer.unobserve(videoRef.current);
                }   
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if(videoRef.current){
            observer.observe(videoRef.current);
        }

        return () => {
            if(videoRef.current){
                observer.unobserve(videoRef.current);
            }
        }
    }, [src, videoRef])

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    }

    const handleClickPause = () => {
        onPlayPauseClick && onPlayPauseClick()
    }

    const videoElement = customPlayer ? (
        <Video
            forwardedref={videoRef}
            className={className}
            id='instagramVideo'
            onLoadedData={handleVideoLoad}
            autoPlay 
            loop
            muted
            playsInline
            onPlayPauseClick={handleClickPause}
            controls={['Seek', 'Time', 'Volume', 'Fullscreen']}>
            <source src={src} />
        </Video>
    ) : (
        <video 
            ref={videoRef}
            onLoadedData={handleVideoLoad}
            className={className}
            playsInline 
            autoPlay 
            loop 
            muted
        >
        </video>
    )


    return (
        <>
            <canvas ref={canvasRef} width='32' height='32' style={{display: 'none'}} />
            {canvas && !isVideoLoaded && (
                <img 
                    src={canvas} 
                    alt="Video placeholder"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} 
                />
            )}
            {videoElement}
        </>
    )
}

export default LazyVideo