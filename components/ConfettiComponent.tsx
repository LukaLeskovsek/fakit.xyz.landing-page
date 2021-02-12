import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size'//import useWindowSize from './WindowSizeHook';
import { useEffect, useState } from 'react';
const ConfettiComponent = () => {
    const [width, height] = useWindowSize();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        console.log('loaded')
        setLoaded(true);
    })

    return(
        loaded ? <Confetti width={width} height={height} recycle={false} numberOfPieces={288}/> : <div/>
    );
}
export default ConfettiComponent;