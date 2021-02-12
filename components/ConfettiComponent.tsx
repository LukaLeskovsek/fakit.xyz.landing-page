import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size'//import useWindowSize from './WindowSizeHook';
import { useToasts } from 'react-toast-notifications'
import { useEffect, useState } from 'react';
import useClippy from 'use-clippy';

interface Props {
    GenerateType: string;
}
const ConfettiComponent = (props: Props) => {
    const [width, height] = useWindowSize();
    const [loaded, setLoaded] = useState(false);
    const { addToast } = useToasts();
    const [clipboard, setClipboard] = useClippy();

    useEffect(() => {
        console.log('loaded')
        setLoaded(true);
        setClipboard('https://fakit.xyz/magic?type='+props.GenerateType);
        addToast('Link copied to clipboard', { appearance: 'success' })  
    }, [])

    return(
        loaded ? <Confetti width={width} height={height} recycle={false} numberOfPieces={288}/> : <div/>
    );
}
export default ConfettiComponent;