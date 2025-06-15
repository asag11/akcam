
import styled from "styled-components"
import bg from "../images/giris.png" 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bg});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  
`

const Home = () => {


  return (
    <Container>

    </Container>
  )
}

export default Home