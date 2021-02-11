import React from 'react';
import { NextPageContext } from 'next'
import Link from 'next/link';
import tw, { styled, css } from 'twin.macro';

interface Props {
    type?: string;
}

const Container = styled.div`
  ${tw`min-h-screen flex items-center justify-center bg-gray-100`}
`;

const GenerateText = styled.div`
    ${tw`text-6xl font-bold p-5 py-20` }
`;

const Card = styled.div`
    ${tw`max-w-md px-5 py-8 bg-white rounded-lg shadow-lg`}`;

const CTA = styled.div`
    ${tw`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-2xl font-medium rounded-md text-white bg-indigo-600 tracking-widest
    hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
`;

export default class Page extends React.Component<Props> {
    static async getInitialProps({ query }: NextPageContext) {
        const type = query.type;

        return {
            type
        };
    }
  
    render() {
        return( 
            <main>
                <Container>
                    <Card>
                        <GenerateText>Fuck {this.props.type}!</GenerateText>
                        <p/>
                        <CTA>
                            <Link href={`/`}>
                                <a>Generate again!</a>
                            </Link>
                        </CTA>
                    </Card>
                </Container>
            </main>

        )
    }
  }