
import styled from "styled-components"
import bg from "../images/giris.png" 
import { Helmet } from "react-helmet-async"

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
    <>
      <Helmet>
        <title>Akçam Dekorasyon Line</title>
      </Helmet>
    <Container>

    </Container>
    </>
  )
}

export default Home