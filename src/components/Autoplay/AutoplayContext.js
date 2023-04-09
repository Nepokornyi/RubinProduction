import React, {createContext, useContext, useState, useEffect} from 'react'
import { isMutedVideoAutoplaySupported } from '../../utils/videoAutoplayUtils';
import VideoWide from '../../assets/video/motion.webm'

const AutoplayContext = createContext();

export function useAutoplay(){
    return useContext(AutoplayContext);
}

export function AutoplayProvider({children}) {
    const [autoplaySupported, setAutoplaySupported] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const supported = await isMutedVideoAutoplaySupported(VideoWide)
            setAutoplaySupported(supported)
            setLoading(false);
        })()
    }, [])

    const value = {autoplaySupported, loading}

    return (
        <AutoplayContext.Provider value={value}>{children}</AutoplayContext.Provider>
    )
}
