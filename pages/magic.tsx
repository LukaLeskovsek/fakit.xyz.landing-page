import React, { useEffect } from 'react';
import Link from 'next/link';
import tw, { styled, css } from 'twin.macro';
import ConfettiComponent from './../components/ConfettiComponent';
import { ToastProvider } from 'react-toast-notifications';
import Head from 'next/head';
import { 
    TwitterIcon, 
    TwitterShareButton, 
    FacebookIcon, 
    FacebookShareButton,
    ViberIcon,
    ViberShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
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
    ${tw`max-w-md px-5 pt-8 pb-4 bg-white rounded-lg shadow-lg`}
    

    `
    ;

const CTA = styled.div`
    ${tw`content-center text-center py-2 px-4 border border-transparent shadow-sm text-2xl font-medium rounded-md text-white bg-indigo-600 tracking-widest
    hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
`;

const ShareSection = styled.div`
    ${tw`table w-full pt-4 text-center`}
`;
const Page = (props: Props) => {
return( 
    <main>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="keywords" content="Fuck, f*ck, frustration, express yourself, helpless" />
            <meta name="author" content="Luka Leskovsek" />
            <meta name="description" content="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck." />

            
            <meta itemProp="name" content="F*ck IT" />
            <meta itemProp="description" content="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck." />
            <meta itemProp="image" content="https://fakit.xyz/fakit.generated.yeah.png" />

            
            <meta property="og:url" content="https://fakit.xyz" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="F*ck IT" />
            <meta property="og:description" content="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck." />
            <meta property="og:image" content="https://fakit.xyz/fakit.generated.yeah.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="F*ck IT" />
            <meta name="twitter:description" content="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck." />
            <meta name="twitter:image" content="https://fakit.xyz/fakit.generated.yeah.png" />
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
                    <ShareSection>
                    
                        <TwitterShareButton url='https://fakit.xyz/' title='F*CK! It’s time to acknowledge your frustration.'>
                            <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                    
                        <FacebookShareButton url='https://fakiy.xyz/' quote='F*CK! It’s time to acknowledge your frustration.' >
                            <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                    
                        <ViberShareButton url='https://fakit.xyz/' title='F*CK! It’s time to acknowledge your frustration.'>
                            <ViberIcon size={32} round={true} />
                        </ViberShareButton>
                            
                        <WhatsappShareButton url='https://fakit.xyz/' title='F*CK! It’s time to acknowledge your frustration.'>
                            <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton>
                   
                    </ShareSection>
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