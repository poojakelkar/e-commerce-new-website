import styled from "styled-components"

const Container =  styled.div`
    flex:1;
    margin: 8px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const TextHead = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Heading = styled.h1`
    color: white;
    margin-bottom: 20px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    background-color: teal;
    color: white;
    border: none;
    cursor:pointer;

    &: hover{
        background-color: #66B2B2;
    }
`;


export const WomenCatItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}>
        </Image>
        <TextHead>
            <Heading>{item.heading}</Heading>
            <Button>SHOP NOW</Button>
        </TextHead>
    </Container>
  )
}
