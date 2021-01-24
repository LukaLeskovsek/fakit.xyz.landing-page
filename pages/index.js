import Head from 'next/head'
import tw, { styled, css } from 'twin.macro';
import Image from 'next/image'
import RadioButton from '../components/RadioButton';

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
    ${tw`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 
    hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
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
  return (
    <Container >
      <Head>
        <title>F*ck IT</title>
      </Head>

  
        <HeroContainer>
          <HeroImage>
            <Image css={[tw`h-56 w-full object-cover lg:absolute lg:h-full`]} src="/fakit_hero_v2.jpg" alt="Fakit Hero Cover Image" width='700' height='900'/>
          </HeroImage>
        </HeroContainer>

        <GeneratorContainer>
          <div css={[tw`lg:pr-8`]}>
          <div css={[tw`max-w-md mx-auto sm:max-w-lg lg:mx-0`]}ß>
            <h2>
             F*CK!
            </h2>
            <p css={[tw`mt-4 text-lg sm:mt-3`]}>
            An extremely flexible, magic word that exists in nearly every part of speech. It can be used as a noun, verb, adjective, and adverb.
        
          (used to express anger, disgust, peremptory rejection, etc., often followed by a pronoun, as you or it.)
          </p>

        <form action="#" method="POST">
        
          <fieldset css={[tw`sm:col-span-2`]}>
            <legend >
              Express your feelings and go wild!
            </legend>
            <ItemsGroup>
              <RadioButton id="fuck_you" value="you">You</RadioButton>

              <RadioButton id="fuck_me" value="me">Me</RadioButton>

              <RadioButton id="fuck_off" value="off">Off</RadioButton>

              <RadioButton id="fuck_yeah" value="yeah">Yeah</RadioButton>
               
              <RadioButton id="fuck_it" value="it">IT</RadioButton>
              
              <RadioButton id="fuck_this" value="this">This</RadioButton>

              <RadioButton id="fuck_that" value="that">That</RadioButton>

              <RadioButton id="fuck_no" value="no">NO</RadioButton>

            </ItemsGroup>
          </fieldset>
       
          <FormFooter>
            <button type="submit">
              Generate Link
            </button>
          </FormFooter>
        </form>
      </div>
    </div>
  </GeneratorContainer>

    </Container>
  )
}
