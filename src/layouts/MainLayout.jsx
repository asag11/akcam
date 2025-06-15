
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import ModalLayout from "./ModalLayout";

import useWindowDimensions from "../hooks/useWindowSize";
import Topbar from "../components/sections/Topbar";
import Side from "../components/sections/Side";
import Footer from "../components/sections/Footer";
import { useEffect } from "react";
import { setIsHomepage, setIsProjectPage } from "../features/layout/layoutSlice";
import { setPrejectItem, setProjectItem } from "../features/project/projectSlice";
import MobileTopDropdown from "../components/sections/MobileTopDropdown";
import DarkOverlay from "../components/sections/DarkOverlay";

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  position: relative;

  .main {
    margin-top: ${({isHomepage}) => isHomepage ? 0 : "120px"};
    margin-left: ${({isHomepage}) => isHomepage ? 0 : "15%"};
  }

    @media (max-width: 1600px) {
      .main {
        margin-left: ${({isHomepage, isProjectPage}) => isHomepage ? 0 : isProjectPage ?  "20%" : "15%"} !important;
      }
    } 

  @media (max-width: 880px) {

  .main {
    margin-left: 0 !important;
  }

}  

`;

const MainLayout = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();

  const {isMobileTopDropdownOpen} = useSelector(state => state.layout)

  useEffect(() => {
    if(path !== "/"){
      dispatch(setIsHomepage(false))
    }
    else{
      dispatch(setIsHomepage(true))
    }
  },[path])

  useEffect(() => {
    if(path.startsWith("/projeler/")){
      dispatch(setIsProjectPage(true))
    }
    else{
      dispatch(setIsProjectPage(false))
      dispatch(setProjectItem(null))
    }
  },[path])
  
  const {
    isHomepage,
  } = useSelector((state) => state.layout);
  

  const {windowDimensions} = useWindowDimensions()


  return (
    <>
      <ModalLayout />
      <MainContainer isHomepage={isHomepage} isProjectPage={path.startsWith("/projeler/")}>

        {
          (!isHomepage && windowDimensions.width > 880) &&
          <Side/>
        }
        <Topbar/>

        {
          (windowDimensions.width <= 880 && isMobileTopDropdownOpen) && 
          <MobileTopDropdown/>
        }

        <div className={`main`}>
            <Outlet />
            
        </div>
      {
          path !== "/" &&
          <Footer/>
        }
      </MainContainer>
      {
        isMobileTopDropdownOpen &&
        <DarkOverlay/>
      }

   
    </>
  );
};

export default MainLayout;