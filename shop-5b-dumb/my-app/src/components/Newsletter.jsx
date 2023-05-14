import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive';


const Container      = styled.div`
    height   : 60vh;
    display  :flex;
    align-items     : center;
    justify-content : center;
    background-color: #fcf5f5;
    flex-direction  :column;
`;
const Title          = styled.h1`
    font-size     : 70px;
    margin-bottom : 20px;
`;

const Description    = styled.div`
    font-size     : 24px;
    font-weight   : 300 ;
    margin-bottom : 20px;
    ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
    width : 50% ;
    height:40px ;
    background-color: white;
    display  :flex;
    justify-content : space-between;
    border   :1px solid lightgray;
    ${mobile({ width: "80%" })}

`;

const Input          = styled.input`
    border   :none;
    flex     : 8  ;
    padding-left : 20px ;
`;

const Button         = styled.button`
    flex     : 1  ;
    border   : none;
    color    : white;
    background-color: #800000;


`;


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get Updated from your Favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your E-Mail" />
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
