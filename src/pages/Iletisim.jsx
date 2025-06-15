

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import InputText from '../components/shared/input/InputText';
import InputMail from '../components/shared/input/InputMail';
import InputTextarea from '../components/shared/input/InputTextarea';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import phoneIcon from "../images/phone.svg"
import Btn from '../components/shared/btn/Btn';
import useWindowDimensions from '../hooks/useWindowSize';
import HeaderMobile from '../components/sections/HeaderMobile';
import { toast } from "react-toastify"
import SmallSpinner from '../components/shared/spinners/SmallSpinner';
import getDateTime from '../helper/getDateTime';

const Container = styled.div`

.wrapper{
    width: 100%;
    height: auto;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;


    .side-form{
      width: calc(45% - 20px);

      .form{
        display: flex;
        flex-direction: column;
        gap: 20px;

        .input-container{
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 10px;

          label{
              font-weight: 500;
              font-size: 16px;
              color: var(--color-dark);
          }
        }
    }
      }

      .side-map{
        width: calc(55% - 20px);
        display: flex;
        flex-direction: column;

        .info-container{

          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 20px;
          margin-top: 25px;

          .info-item{

            display: flex;
            align-items: center;
            gap: 20px;

            .location-icon{
              font-size: 1.3rem;
            }
          

            .phone-icon{

            }

            .mail-icon{
              font-size: 1.3rem;
            }

            span{
              font-weight: 400;
              font-size: 16px;
              color: var(--color-dark);
            }
          }

        }

        .map-container{
          width: 100%;
          height: 480px;
          border-radius: 8px;
          overflow: hidden;
        }
      }
    
}

  @media (max-width: 880px) {

  .wrapper{
    flex-direction: column !important;
    padding: 0 20px !important;

  }

  .side-map, .side-form{
    width: 100% !important;

  }
}  
`

const Iletisim = () => {

  const [username, setUsername] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const {windowDimensions} = useWindowDimensions()

  const initialCenterRef = useRef({ lat: 39.594255, lng: 26.962180 });

  const mapRef = useRef()
  const onMapLoad = (map) => {
    mapRef.current = map;
  };


  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      // const result = await emailjs.send(
      await emailjs.send(
       process.env.REACT_APP_SERVICE_ID,    // EmailJS Service ID
        process.env.REACT_APP_TEMPLATE_ID,   // EmailJS Template ID
        { username, mail, message, time: getDateTime()},             // templateParams obje’si
        process.env.REACT_APP_PUBLIC_KEY     // EmailJS Public Key (User ID)
      );

      setIsLoading(false)

      toast.success('Gönderim başarı ile gerçekleştirildi.', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
    } catch (error) {
        setIsLoading(false)
        toast.error(`Bir hata meydana geldi, lütfen daha sonra tekrar.`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
  };



  return (

    <Container>
        <div className="wrapper">

        <div className="side-form">
            {
                windowDimensions.width <= 880 &&
                <HeaderMobile/>
            }
          <div className="form">
            <div className="input-container">
              <label htmlFor="">Adınız ve Soyadınız</label>
              <InputText data={username} setData={(e) => setUsername(e.target.value)} name={"username"} placeholderText={"Ad Soyad"} inputWidth={"100%"} backgroundColor={"#fff"} textColor={"var(--color-dark)"} b placeholderColor={"#b6b4b4"}/>
            </div>
            <div className="input-container">
              <label htmlFor="">Mail Adresiniz</label>
              <InputMail data={mail} setData={(e) => setMail(e.target.value)} name={"mail"} placeholderText={"E-Mail"} inputWidth={"100%"} backgroundColor={"#fff"} textColor={"#000"} placeholderColor={"#b6b4b4"}/>
            </div>
            <div className="input-container">
              <label htmlFor="">Mesajınız</label>
              <InputTextarea data={message} setData={(e) => setMessage(e.target.value)} name={"username"} placeholderText={"Mesaj..."} inputWidth={"100%"} backgroundColor={"#fff"} textColor={"var(--color-dark)"} b placeholderColor={"#b6b4b4"}/>
            </div>

            <Btn bgColor="var(--color-green)" width="200px" height="40px" color="#ffff" radius="8px" fontSize="16px" fontWeight="600" handleClick={(e) =>sendEmail(e)}>{isLoading ? <SmallSpinner size={"20px"} color={"#fff"}/> : "Gönder"}</Btn>
          </div>
        </div>
        <div className="side-map">

          <div className="info-container">

            <div className="info-item">
              <SlLocationPin className='location-icon'/>
              <span>Kuruçay Mevkii Organize Sanayi Sitesi 3. Cad. No : 6 Edremit /  Balıkesir</span>
            </div>

            <div className="info-item">
              <img src={phoneIcon} className='phone-icon' alt="" />
              <span>0 266 2392 13 13</span>
            </div>

            <div className="info-item">
              <CiMail className='mail-icon'/>
              <span>info@akcammobilya.com.tr</span>
            </div>

          </div>
          <div className="map-container">
      <GoogleMap
        center={initialCenterRef.current}
        zoom={18}
        onLoad={onMapLoad}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
          <Marker
            position={{ lat: 39.594255, lng: 26.962180 }}
          />
      </GoogleMap>
          </div>
        </div>
        </div>
    </Container>
  );
}


export default Iletisim