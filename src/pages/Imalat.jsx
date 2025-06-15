

import styled from "styled-components"

import hkImage from "../images/hk.png"
import hkImage2 from "../images/hk2.png"
import useWindowDimensions from "../hooks/useWindowSize"
import HeaderMobile from "../components/sections/HeaderMobile"
import { Helmet } from "react-helmet-async"

import img from "../images/square.png"

const Container = styled.div`

.wrapper{
    width: 100%;
    height: auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    

    .plist{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;

        p{
            font-size: 18px;
            font-weight: 300;
        }
    }

    .column{
        display: flex;
        flex-direction: column;
        gap: 30px;


        .img-container{
            width: 100%;
            object-fit: cover;
            height: auto;
        }

        .img-list{
            display: flex;
            gap: 30px;

            height: auto;

            img{
                width: calc(50% - 15px);
                height: auto;

            }
        }
    }

}

  @media (max-width: 880px) {

  .wrapper {
    padding: 0 20px !important;

  }

    p{
    font-size: 16px !important;
}

}  
`

const pList = [
        "Lorem ipsum dolor sit amet consectetur. Sed nisl amet nibh amet. Fames nascetur massa lobortis faucibus sed venenatis quis magna pulvinar. Pulvinar pretium platea ac viverra. Non volutpat ut nulla urna nec sed bibendum.Lorem ipsum dolor sit amet consectetur. Sed nisl amet nibh amet. Fames nascetur massa lobortis faucibus sed venenatis quis magna pulvinar. Pulvinar pretium platea ac viverra. Non volutpat ut nulla urna nec sed bibendum.",
        "Lorem ipsum dolor sit amet consectetur. Sed nisl amet nibh amet. Fames nascetur massa lobortis faucibus sed venenatis quis magna pulvinar. Pulvinar pretium platea ac viverra. Non volutpat ut nulla urna nec sed bibendum.Lorem ipsum dolor sit amet consectetur. Sed nisl amet nibh amet. Fames nascetur massa lobortis faucibus sed venenatis quis magna pulvinar. Pulvinar pretium platea ac viverra. Non volutpat ut nulla urna nec sed bibendum.",
    ] 

const Imalat = () => {

    const {windowDimensions} = useWindowDimensions()
    
  return (
    <>
        <Helmet>
        <title>İmalat - Akçam Dekorasyon Line</title>
        </Helmet>
    <Container>

        <div className="wrapper">
            {
                windowDimensions.width <= 880 &&
                <HeaderMobile/>
            }

            <div className="plist">
                {
                    pList.map(item => (
                        <p>{item}</p>
                    ))
                }
            </div>

            <div className="column">

                <img src={windowDimensions.width <= 720 ? img : hkImage} className="img-container" alt="" />
                {
                    windowDimensions.width <= 720 &&
                    <img src={windowDimensions.width <= 720 ? img : hkImage} className="img-container" alt="" />
                }
                {
                    windowDimensions.width > 720 &&
                    <div className="img-list">
                        <img src={hkImage2} alt="" />
                        <img src={hkImage2} alt="" />
                    </div>
                }

            </div>
        </div>
    </Container>
    </>

  )
}

export default Imalat