/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from './../components/GlobalStyles'
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const scrollToTop = () => window.scrollTo(0, 0);

    useEffect(() => {
        router.events.on('routeChangeComplete', scrollToTop);
        return () => router.events.off('routeChangeComplete', scrollToTop);
    }, []);

    return (
        <div>
            <GlobalStyles />
            <Component {...pageProps} />
        </div>
    );
}

export default App;
