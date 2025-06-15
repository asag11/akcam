import styled from "styled-components"

import hkImage from "../images/hk.png"
import hkImage2 from "../images/hk2.png"
import HeaderMobile from "../components/sections/HeaderMobile"
import useWindowDimensions from "../hooks/useWindowSize"

const Container = styled.div`

.wrapper{
    width: 100%;
    height: auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    
    .top-entry{
        font-weight: 500;
        font-size: 18px;
        padding-bottom: 20px;
    }

    .plist{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;

        p{
            font-size: 18px;
            font-weight: 00;
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

        .wrapper{
            padding: 0 20px !important;
        }
    }  
`

const pList = [
        "Edremit’te faaliyet gösteren Akçam Mobilya, mobilya ve iç mimari çözümler alanında bölgenin öncü firmalarındandır. Müşteri ihtiyaçlarını ve değişen trendleri yakından takip eden firmamız, deneyimli ve profesyonel ekibiyle her geçen gün gelişerek hizmet vermeye devam etmektedir.",
        "Mutfak, banyo, yatak odası, vestiyer gibi yaşam alanlarına yönelik özgün tasarımlarımızla her zevke hitap ediyoruz. Mimari bakış açımız ve yenilikçi yaklaşımımızla, her mekân için işlevsel ve estetik çözümler sunuyoruz. Ayrıca dış mekân uygulamalarında; pergole sistemleri, bahçe çitleri, ahşap tavan kaplamaları ve lambiri sistemleriyle geniş bir hizmet yelpazesi sunmaktayız.",
        "Müşteri memnuniyeti ve kalite, çalışma prensibimizin temelini oluşturur. İmalat öncesinden montaj sonrasına kadar her aşamada yüksek standartlarda hizmet sunarız. 3D modelleme ve iç/dış mekân proje tasarımlarımızla da iş yeri ve konut projelerinde çözüm ortağınız olmaktan gurur duyuyoruz."
    ] 

const Hakkimizda = () => {

  const {windowDimensions} = useWindowDimensions()

  return (
    <Container>
        <div className="wrapper">
            {
                windowDimensions.width <= 880 &&
                <HeaderMobile/>
            }
            <span className="top-entry">1979 dan günümüze;</span>

            <div className="plist">
                {
                    pList.map(item => (
                        <p>{item}</p>
                    ))
                }
            </div>

            <div className="column">

                <img src={hkImage} className="img-container" alt="" />
                <div className="img-list">
                    <img src={hkImage2} alt="" />
                    <img src={hkImage2} alt="" />
                </div>
                <img src={hkImage} className="img-container" alt="" />

            </div>
        </div>
    </Container>
  )
}

export default Hakkimizda