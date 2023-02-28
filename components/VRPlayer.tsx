import Script from "next/script";
import { useEffect, useRef } from "react"

const VRPlayer = () => {

    return (
        <div className="w-full border-none">
            <iframe 
                className="w-full border-none h-[300px] sm:h-[350px] "
                frameBorder="0" 
                allowFullScreen allow="xr-spatial-tracking; gyroscope; accelerometer" 
                scrolling="no" 
                src="https://kuula.co/share/collection/7vkgy">

            </iframe>
        </div>
        
    )
}

export default VRPlayer;