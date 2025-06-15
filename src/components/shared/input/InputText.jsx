

import styled from "styled-components"

const Container = styled.input`
        width: ${({inputWidth}) => inputWidth};
        padding: 15px;
        font-size: 16px;
        font-weight: 400;
        height: 50px;
        border: 1px solid #acabab;
        background-color: ${({backgroundColor}) => backgroundColor};
        border-radius: 8px;
        color: var(--color-dark);

        &::placeholder{
            color: ${({placeholderColor}) => placeholderColor};
            font-size: 16px;
            font-weight: 400;


        }
        
        @media (max-width: 650px) {

            &::placeholder{
              font-size: 12px !important;

        }
        }

`

const InputText = ({data, setData, name, placeholderText, inputWidth, backgroundColor, placeholderColor}) => {
  return (
        <Container autoComplete={false} placeholder={placeholderText} maxLength={100} type="text" id={"text"} onChange={setData} value={data} name={name} inputWidth={inputWidth} backgroundColor={backgroundColor} placeholderColor={placeholderColor}/>
  )
}

export default InputText