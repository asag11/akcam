

import styled from "styled-components"

const Container = styled.button`
  background-color: ${({bgColor})=> bgColor};
  color: ${({color})=> color};
  border-radius: ${({radius})=> radius};
  width: ${({width})=> width};
  padding: ${({padding})=> padding};
  font-size: ${({fontSize})=> fontSize};
  text-align: center;
  height: ${({height})=> height};
  font-weight: ${({fontWeight}) => fontWeight};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Btn = ({children, width, bgColor, borderColor, height="40px", padding="0", fontSize="14px", fontWeight="600", radius="10px", handleClick, color="#fff" }) => {
  return (
    <Container width={width} padding={padding} bgColor={bgColor} borderColor={borderColor} fontSize={fontSize} radius={radius} height={height} fontWeight={fontWeight} onClick={handleClick} color={color}>
        {children}
    </Container>
  )
}

export default Btn