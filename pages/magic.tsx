import React from 'react';
import { NextPageContext } from 'next'
import Link from 'next/link';

interface Props {
    type?: string;
}

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
                <h1>Fuck {this.props.type}!</h1>
                <p/>
                <Link href={`/`}>
                    <a>Generate again!</a>
                </Link>
            </main>

        )
    }
  }