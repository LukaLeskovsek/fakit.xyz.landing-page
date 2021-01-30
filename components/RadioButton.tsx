import React, { ReactNode, Ref } from 'react';
import tw, { styled, css } from 'twin.macro';

interface Props {
    name: string;
    id: string;
    value: string;
    children: ReactNode;
}

const InnerLabel = styled.div`
    ${tw`block text-xl p-2`}
`;

const Input = styled.input`
`;

const Container = styled.div`
    ${tw`flex items-center`}

`;
const RadioButton = React.forwardRef<HTMLInputElement, Props>((props, ref)  => {
    const {id, value} = props;
    return (
        <Container>
            <Input id={id} name="radiobutton" value={value} type="radio" ref={ref}/>
            <label htmlFor={id}>
                <InnerLabel>{props.children}</InnerLabel>
            </label>
        </Container>
    );
});

export default RadioButton;