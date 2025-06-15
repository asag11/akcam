import styled from "styled-components"

const Container = styled.div`

position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
background-color: rgba(0,0,0,.4);
z-index: 15;
    
`

const DarkOverlay = () => {
  return (
    <Container>

    </Container>
  )
}

export default DarkOverlay