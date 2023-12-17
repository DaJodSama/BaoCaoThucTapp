import styled from "styled-components"

const Container=styled.div`
    height: 30px;;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
`

const Annoucement = () => {
  return (
    <Container>
        Siêu giảm giá! Free Ship đối với đơn trên $ 20
    </Container>
  )
}

export default Annoucement