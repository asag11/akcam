
import styled from "styled-components";
import img from "../images/square.png"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProjectItem } from "../features/project/projectSlice";
import useWindowDimensions from "../hooks/useWindowSize";
import HeaderMobile from "../components/sections/HeaderMobile";


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
    font-size: 25px;
    font-weight: 500;
    color: #616161;
    padding-bottom: 20px;

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
    const {windowDimensions} = useWindowDimensions()

  return (
    <Container>
        <div className="wrapper">
            {
                windowDimensions.width <= 880 &&
                <HeaderMobile/>
            }
            <GalleryGrid>
                <Link to={"/projeler/c-evi"} className="g-item" onClick={() => dispatch(setProjectItem(projectData))}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </Link>
                <Link to={"/projeler/c-evi"} className="g-item" onClick={() => dispatch(setProjectItem(projectData))}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </Link>
                <Link to={"/projeler/c-evi"} className="g-item" onClick={() => dispatch(setProjectItem(projectData))}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </Link>
                <Link to={"/projeler/c-evi"} className="g-item" onClick={() => dispatch(setProjectItem(projectData))}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </Link>
                <Link to={"/projeler/c-evi"} className="g-item" onClick={() => dispatch(setProjectItem(projectData))}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </Link>
                <Link to={"/projeler/c-evi"} className="g-item" onClick={() => dispatch(setProjectItem(projectData))}>
                    <img src={img} alt=""/>
                    <div className="overlay">Lorem, ipsum dolor</div>
                </Link>
            </GalleryGrid>
        </div>
    </Container>
  )
}

export default Projeler