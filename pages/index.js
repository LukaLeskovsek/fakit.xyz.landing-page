import Head from 'next/head'
import tw, { styled, css } from 'twin.macro';
import Image from 'next/image'

export default function Home() {

  const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`

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
      ${tw`text-3xl font-extrabold tracking-tight sm:text-8xl text-black`}
    }
    form {
      ${tw`mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8`}
    }
    input { 
      ${tw`focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300`}
    }
    legend {
      ${tw`block text-xl font-medium text-green-700`}
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
          <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2>
             F*CK!
            </h2>
            <p className="mt-4 text-lg text-white sm:mt-3">
            An extremely flexible, magic word that exists in nearly every part of speech. It can be used as a noun, verb, adjective, and adverb.
        
          (used to express anger, disgust, peremptory rejection, etc., often followed by a pronoun, as you or it.)
          </p>

        <form action="#" method="POST">
        
          <fieldset className="sm:col-span-2">
            <legend >
              Please!
            </legend>
            <div className="mt-4 grid grid-cols-2 gap-y-4">
              <div className="flex items-center">
                <input id="budget_under_25k" name="budget" value="under_25k" type="radio"/>
                <label for="budget_under_25k" className="ml-3">
                  <span className="block text-sm text-white">YOU</span>
                </label>
              </div>
              <div className="flex items-center">
                <input id="budget_25k-50k" name="budget" value="25k-50k" type="radio"/>
                <label for="budget_25k-50k" class="ml-3">
                  <span className="block text-sm text-white">ME</span>
                </label>
              </div>
              <div className="flex items-center">
                <input id="budget_50k-100k" name="budget" value="50k-100k" type="radio"/>
                <label for="budget_50k-100k" className="ml-3">
                  <span className="block text-sm text-white">OFF</span>
                </label>
              </div>
              <div className="flex items-center">
                <input id="budget_over_100k" name="budget" value="over_100k" type="radio"/>
                <label for="budget_over_100k" className="ml-3">
                  <span className="block text-sm text-white">YEAH+</span>
                </label>
              </div>
                            <div className="flex items-center">
                <input id="budget_over_100k" name="budget" value="over_100k" type="radio"/>
                <label for="budget_over_100k" className="ml-3">
                  <span className="block text-sm text-white">IT</span>
                </label>
              </div>
                            <div className="flex items-center">
                <input id="budget_over_100k" name="budget" value="over_100k" type="radio"/>
                <label for="budget_over_100k" className="ml-3">
                  <span className="block text-sm text-white">THIS</span>
                </label>
              </div>

                            <div className="flex items-center">
                <input id="budget_over_100k" name="budget" value="over_100k" type="radio"/>
                <label for="budget_over_100k" className="ml-3">
                  <span className="block text-sm text-white">THAT</span>
                </label>
              </div>

              <div className="flex items-center">
                <input id="budget_over_100k" name="budget" value="over_100k" type="radio"/>
                <label for="budget_over_100k" className="ml-3">
                  <span className="block text-sm text-white">NO</span>
                </label>
              </div>

            </div>
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
