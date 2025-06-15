    
    

import styled from "styled-components"

const Container = styled.textarea`
        width: ${({inputWidth}) => inputWidth};
        padding: 10px 15px;
        border-radius: 8px;
        resize: vertical;
        font-size: 16px;
        font-weight: 500;
        min-height: 322px;
        height: auto; 
        border: 1px solid #acabab;
        color: var(--color-dark);
        font-variant-numeric: lining-nums;
        line-height: 22px;

        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: var(--color-light);
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::placeholder{
            color: ${({placeholderColor}) => placeholderColor};
            font-size: 16px;
            font-weight: 500;


        }
        
        @media (max-width: 650px) {

            &::placeholder{
              font-size: 12px !important;

        }
        }

`

const InputTextarea = ({data, setData, name, placeholderText, inputWidth, backgroundColor, placeholderColor}) => {
  return (
        <Container autoComplete={false} placeholder={placeholderText} maxLength={500} type="text" id={"text"} onChange={setData} value={data} name={name} inputWidth={inputWidth} backgroundColor={backgroundColor} placeholderColor={placeholderColor}/>
  )
}

export default InputTextarea
    
