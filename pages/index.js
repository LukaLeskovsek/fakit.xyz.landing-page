import Head from 'next/head'
import tw, { styled, css } from 'twin.macro';
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
    ${tw`text-3xl font-extrabold tracking-tight sm:text-8xl text-black my-5`}
  }
  form {
    ${tw`mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8`}
  }
  input { 
    ${tw`focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300`}
  }
  legend {
    ${tw`block text-xl font-medium`}
  }
  button {
    ${tw`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-2xl font-medium rounded-md text-white bg-indigo-600 tracking-widest
    hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
  }
}
`;

const FormFooter = styled.div`
  ${tw`text-left sm:col-span-2`}
`;

const ItemsGroup = styled.div`
  ${tw`mt-4 grid grid-cols-2 gap-y-4`}
`;

const generateLink = () => {

}
export default function Home() {
  const { handleSubmit, register, errors } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(`Form Data: ${JSON.stringify(data)}`);
    router.push('/magic?type='+encodeURIComponent(data.radiobutton))
  }
  
  return (
    <Container >
      <Head>
        <title>F*ck IT</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Express your feelings frustration or joy!" />

        
        <meta itemprop="name" content="F*ck IT" />
        <meta itemprop="description" content="Express your feelings frustration or joy!" />
        <meta itemprop="image" content="https://fakit.xyz/_next/image?url=%2Ffakit_hero_v2.jpg" />

        
        <meta property="og:url" content="https://fakit.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="F*ck IT" />
        <meta property="og:description" content="Express your feelings frustration or joy!" />
        <meta property="og:image" content="https://fakit.xyz/_next/image?url=%2Ffakit_hero_v2.jpg" />

        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="F*ck IT" />
        <meta name="twitter:description" content="Express your feelings frustration or joy!" />
        <meta name="twitter:image" content="https://fakit.xyz/_next/image?url=%2Ffakit_hero_v2.jpg" />

        
        <NextSeo
          title="F*ck IT"
          description="An extremely flexible, magic word that exists in nearly every part of speech.."
          canonical="https://fakit.xyz/"
          openGraph={{
            url: 'https://fakit.xyz/',
            title: 'F*ck IT',
            description: 'Generate your F*ck version and express your feelings!',
            images: [
              {
                url: 'https://fakit.xyz/_next/image?url=%2Ffakit_hero_v2.jpg',
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
              Express yourself!
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
              F*CK!
            </button>
          </FormFooter>
        </form>
        </div>
        </div>
        
    </GeneratorContainer>

    </Container>
  )
}
