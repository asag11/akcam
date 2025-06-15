
import styled from "styled-components";
import img from "../images/square.png"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProjectItem } from "../features/project/projectSlice";
import useWindowDimensions from "../hooks/useWindowSize";
import HeaderMobile from "../components/sections/HeaderMobile";
import { useEffect, useRef, useState } from "react";


const Container = styled.div`
    width: 100%;

    .wrapper{
        width: 100%;
        height: auto;
        padding: 0 40px;
        display: flex;
        flex-direction: column;
    }

      @media (max-width: 880px) {

  .wrapper {
    padding: 0 20px !important;

  }

} 
`
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* En fazla 3 sütun */
  gap: 16px;

  /* 768px altı: 2 sütun */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);



  }

  /* 480px altı: 1 sütun */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  .g-item{
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  transition: 0.5s ease;


  /* Hover başladığında overlay hemen kayacak */
  &:hover .overlay {
    transform: translate(0, 0);
  transition: 0.5s ease;

  }



    img{
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 4px;
    
  }

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(236, 236, 238, 0.74);
    transform: translate(0, 100%);
    transition: 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 500;
    color: #616161;
    padding-bottom: 20px;

  }
  }

  @media (max-width: 880px) {
    .g-item {
      /* hover’da hiçbir şey yapma */
      &:hover .overlay {
        transform: translate(0, 100%) !important;
      }
      &.active .overlay {
        transform: translate(0, 0) !important;
      }
    }

  .overlay {
    align-items: center !important;
    font-size: 16px !important;
    padding-bottom: 0 !important;

  }

} 



`;

const projectData = {
    name: "C Evi",
    address: "Küçükkuyu Çanakkale",
    year: "2025"
}

const Projeler = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {windowDimensions} = useWindowDimensions()
  const [activeIndex, setActiveIndex] = useState(null);
      const timerRef = useRef(null);

  const handeleDelayClick = (path, idx) => {
    // Önceki timer varsa iptal et
    setActiveIndex(idx)
    if (timerRef.current) clearTimeout(timerRef.current);

    // 2000 ms (2s) sonra çalışacak fonksiyonu schedule et
    timerRef.current = setTimeout(() => {
      dispatch(setProjectItem(projectData))
      localStorage.setItem("projectItem", JSON.stringify(projectData))
      navigate(path)
      timerRef.current = null;
    }, 1200);
  };

  // Component unmount olduğunda timer'ı temizle
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = (path) => {
    dispatch(setProjectItem(projectData))
    localStorage.setItem("projectItem", JSON.stringify(projectData))
    navigate(path)
  }


  return (
    <Container>
        <div className="wrapper">
            {
                windowDimensions.width <= 880 &&
                <HeaderMobile/>
            }
            <GalleryGrid>
          {[...Array(6)].map((_, idx) => (
                <button className={(activeIndex === idx && windowDimensions.width <= 880) ? "g-item active" : "g-item"} onClick={() => windowDimensions.width <= 880 ?  handeleDelayClick("/projeler/c-evi", idx) : handleClick("/projeler/c-evi", idx)}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </button>
          ))}
              
                {/* <button  className="g-item" onClick={() => windowDimensions.width <= 880 ?  handeleDelayClick("/projeler/c-evi") : handleClick("/projeler/c-evi")}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </button>
                <button  className="g-item" onClick={() => windowDimensions.width <= 880 ?  handeleDelayClick("/projeler/c-evi") : handleClick("/projeler/c-evi")}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </button>
                <button  className="g-item" onClick={() => windowDimensions.width <= 880 ?  handeleDelayClick("/projeler/c-evi") : handleClick("/projeler/c-evi")}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </button>
                <button  className="g-item" onClick={() => windowDimensions.width <= 880 ?  handeleDelayClick("/projeler/c-evi") : handleClick("/projeler/c-evi")}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </button>
                <button  className="g-item" onClick={() => windowDimensions.width <= 880 ?  handeleDelayClick("/projeler/c-evi") : handleClick("/projeler/c-evi")}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </button> */}
            </GalleryGrid>
        </div>
    </Container>
  )
}

export default Projeler