import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size'//import useWindowSize from './WindowSizeHook';
import { useEffect } from 'react';
const ConfettiComponent = () => {
    const [width, height] = useWindowSize();

    useEffect(() => {
        console.log('loaded')
    })

    return(
        <Confetti width={width} height={height} recycle={false} numberOfPieces={288}/>
    );
}
export default ConfettiComponent;