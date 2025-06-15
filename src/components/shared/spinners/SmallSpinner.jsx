import styled from "styled-components";

const Container = styled.div`
  width: ${({size})=> size};
  height: ${({size})=> size};
  margin: auto;

.spinner-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid ${({bgColor})=> bgColor};
  border-top-color: ${({color})=> color};
  animation: spin .8s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`

const SmallSpinner = ({size, color, bgColor="transparent"}) => {
    return (
      <Container size={size} color={color} bgColor={bgColor}>
        <div className="spinner-inner"></div>
      </Container>
    );
  };

  export default SmallSpinner