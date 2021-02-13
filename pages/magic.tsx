import React, { useEffect } from 'react';
import Link from 'next/link';
import tw, { styled, css } from 'twin.macro';
import ConfettiComponent from './../components/ConfettiComponent';
import { ToastProvider } from 'react-toast-notifications';
import Head from 'next/head';
interface Props {
    type?: string;
}

const Container = styled.div`
  ${tw`min-h-screen flex items-center justify-center content-center bg-gray-100`}
`;

const GenerateText = styled.div`
    ${tw`text-6xl font-bold p-5 py-20` }
`;

const Card = styled.div`
    ${tw`max-w-md px-5 py-8 bg-white rounded-lg shadow-lg`}
    

    `
    ;

const CTA = styled.div`
    ${tw`content-center text-center py-2 px-4 border border-transparent shadow-sm text-2xl font-medium rounded-md text-white bg-indigo-600 tracking-widest
    hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
`;

const Page = (props: Props) => {
return( 
    <main>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck." />

            
            <meta itemProp="name" content="F*ck IT" />
            <meta itemProp="description" content="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck." />
            <meta itemProp="image" content="https://fakit.xyz/_next/image?url=%2Ffakit.generated.yeah.png&w=740&q=125" />

            
            <meta property="og:url" content="https://fakit.xyz" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="F*ck IT" />
            <meta property="og:description" content="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck." />
            <meta property="og:image" content="https://fakit.xyz/_next/image?url=%2Ffakit.generated.yeah.png&w=740&q=125" />
        </Head>
        <ToastProvider autoDismiss={true}>
            <Container>
                <Card>
                    <ConfettiComponent GenerateType={props.type}/>
                    <GenerateText>Fuck {props.type}!</GenerateText>
                    <CTA>
                        <Link href={`/`}>
                            <a>Generate again!</a>
                        </Link>
                    </CTA>
                </Card>
            </Container>
        </ToastProvider>
    </main>
    )
}

Page.getInitialProps = async ({query}) => {

    const type = query.type;

    return {
        type
    };
}

export default Page;