import Head from 'next/head'
import tw, { styled } from 'twin.macro';
import Image from 'next/image'
import RadioButton from '../components/RadioButton';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

const Container = styled.div`
  ${tw`bg-white relative`}
`;


const HeroContainer = styled.div`
  ${tw`lg:absolute lg:inset-0`}
`;

const HeroImage = styled.div`
  ${tw`lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2`}
`;

const GeneratorContainer = styled.div`
${tw`relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2`}
& {
  h2 {
    ${tw`text-3xl font-extrabold tracking-tight sm:text-8xl text-gray-800 my-5`}
  }
  form {
    ${tw`mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 text-gray-800`}
  }
  input { 
    ${tw`focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 text-gray-800`}
  }
  legend {
    ${tw`block text-sm font-medium`}
  }
  button {
    ${tw`
      inline-flex justify-center 
      py-2 px-4 
      border 
      border-transparent 
      shadow-sm 
      text-2xl 
      font-medium 
      rounded-md 
      text-white 
      bg-gray-600 
      tracking-widest
      hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
  }
}
`;

const FormFooter = styled.div`
  ${tw`text-left sm:col-span-2`}
`;

const ItemsGroup = styled.div`
  ${tw`mt-4 grid grid-cols-2 gap-y-4`}
`;
export default function Home() {
  const { handleSubmit, register, errors } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log('-----------------------');
    console.log(process.env.NODE_ENV);
    if(typeof(pa) != "undefined")
    {
      pa.track({name: 'F*CK Generator', value: data.radiobutton});
    }
    router.push('/magic?type='+encodeURIComponent(data.radiobutton))
  }
  
  return (
    <>
    <Container >
      <Head>
        <title>F*ck IT</title>
        <script data-host="https://microanalytics.io" data-dnt="false" src="https://microanalytics.io/js/script.js" id="ZwSg9rf6GA" async defer></script>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck." />

        
        <meta itemProp="name" content="F*ck IT" />
        <meta itemProp="description" content="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck." />
        <meta itemProp="image" content="https://fakit.xyz/_next/image?url=%2Ffakit_hero_v2.jpg&w=1920&q=75" />

        
        <meta property="og:url" content="https://fakit.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="F*ck IT" />
        <meta property="og:description" content="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck." />
        <meta property="og:image" content="https://fakit.xyz/_next/image?url=%2Ffakit_hero_v2.jpg&w=1920&q=75" />

        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="F*ck IT" />
        <meta name="twitter:description" content="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck." />
        <meta name="twitter:image" content="https://fakit.xyz/_next/image?url=%2Ffakit_hero_v2.jpg&w=1920&q=75" />

        
        <NextSeo
          title="F*ck IT"
          description="It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck."
          canonical="https://fakit.xyz/"
          openGraph={{
            url: 'https://fakit.xyz/',
            title: 'F*ck IT',
            description: 'It’s time to acknowledge your frustration. Maybe you’re feeling helpless or wishing there was some way to express yourself. Or you’re just plain angry and need a word or two to vent. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck.',
            images: [
              {
                url: 'https://fakit.xyz/_next/image?url=%2Ffakit_hero_v2.jpg&w=1920&q=75',
                width: 192,
                height: 75,
                alt: 'Og Image Alt F*ck',
              }
            ],
            site_name: 'F*ck IT',
          }}
          twitter={{
            handle: '@LeskovsekLuka',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
      </Head>

  
        <HeroContainer>
          <HeroImage>
            <Image css={[tw`h-56 w-full object-cover lg:absolute lg:h-full`]} src="/fakit_hero_v2.jpg" alt="Fakit Hero Cover Image" width='700' height='900'/>
          </HeroImage>
        </HeroContainer>

        <GeneratorContainer>
          <div css={[tw`lg:pr-8`]}>
          <div css={[tw`max-w-md mx-auto sm:max-w-lg lg:mx-0`]}>
            <h2>
              F*CK!
            </h2>
            <p css={[tw`mt-4 text-lg sm:mt-3 italic`]}>
            An extremely flexible, magic word that exists in nearly every part of speech. It can be used as a noun, verb, adjective, and adverb.

          (used to express anger, disgust, peremptory rejection, etc., often followed by a pronoun, as you or it.)
          </p>

        <form onSubmit={handleSubmit(onSubmit)}>

          <fieldset css={[tw`sm:col-span-2`]}>
            <legend >
            It’s time to acknowledge your frustration. We feel you. We’ve got that word for you. And it starts with F and rhymes with kuck… we mean luck.
            </legend>
            <ItemsGroup >
             <RadioButton id="fuck_you" value="you" ref={register}>You</RadioButton>

              <RadioButton id="fuck_me" value="me" ref={register}>Me</RadioButton>

              <RadioButton id="fuck_off" value="off" ref={register}>Off</RadioButton>

              <RadioButton id="fuck_yeah" value="yeah" ref={register}>Yeah</RadioButton>
                
              <RadioButton id="fuck_it" value="it" ref={register}>IT</RadioButton>
              
              <RadioButton id="fuck_this" value="this" ref={register}>This</RadioButton>

              <RadioButton id="fuck_that" value="that" ref={register}>That</RadioButton>

              <RadioButton id="fuck_no" value="no" ref={register}>NO</RadioButton>

            </ItemsGroup>
          </fieldset>

          <FormFooter>
            <button>
              Generate
            </button>
          </FormFooter>
        </form>
        </div>
        </div>
        
    </GeneratorContainer>

    </Container>
        
    <footer css={[tw`relative mt-32`]}>
        <div css={[tw`container mx-auto`]}>
            <div css={[tw`border-t flex flex-col items-center`]}>
                <div css={[tw`sm:w-2/3 text-center py-4`]}>
                    <p css={[tw`text-sm text-gray-700 font-bold`]}>
                        © 2021 by <a href='https://twitter.com/LeskovsekLuka'> Luka Leskovsek</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
