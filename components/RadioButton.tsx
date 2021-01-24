import React, { ReactNode } from 'react';
import tw, { styled, css } from 'twin.macro';

interface Props {
    name: string;
    id: string;
    value: string;
    children: ReactNode;
}

const InnerLabel = styled.div`
`;

const Input = styled.input`
`;

const Container = styled.div`
    ${tw`flex items-center`}

`;

// <div>
//                 <input id="budget_under_25k" name="budget" value="under_25k" type="radio"/>
//                 <label for="budget_under_25k" css="ml-3">
//                   <span css={[tw`block text-xl p-10`]}>YOU</span>
//                 </label>
//               </div>

const RadioButton : React.FunctionComponent<Props> = (props: Props) => {

    const {name, id, value} = props;

    return (
        <Container>
            <Input id={id} name="radiobutton" value={value} type="radio"/>
            <label for={id} css={[`ml-3`]}>
                <InnerLabel css={[tw`block text-xl p-2`]}>{props.children}</InnerLabel>
            </label>
        </Container>
    );
}

export default RadioButton;