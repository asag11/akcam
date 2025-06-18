import styled from "styled-components"

import akcamLogo from "../../images/akcam-logo.svg"
import akcamLogoDark from "../../images/akcam-dark.svg"
import { Link, useLocation } from "react-router-dom"
import menuList from "../../utils/menuList"
import useWindowDimensions from "../../hooks/useWindowSize"
import { IoMenuOutline } from "react-icons/io5";
import { useDispatch } from "react-redux"
import { setMobileTopDropdownOpen } from "../../features/layout/layoutSlice"

const Container = styled.nav`
    width: 100%;
    height: ${({isHomePage}) => isHomePage ? "65px" : "auto" };
    position: fixed;
    background: ${({isHomePage}) => isHomePage ? "linear-gradient(179.28deg, rgba(255, 255, 255, 0.075) 0.62%, rgba(255, 255, 255, 0) 99.38%)" : "#fff" };
    top: ${({isHomePage}) => isHomePage ? "30px" : 0 };
    padding: ${({isHomePage}) => !isHomePage ? "30px 40px 20px 40px" : 0 };
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    z-index: 20;

    .nav-list{
        display: flex;
        gap: 20px;

        
        .nav-item{
            background-color: transparent;
            color: ${({isDarkBg}) => isDarkBg ? "var(--color-light)" : "var(--color-dark)"};
            font-size: 18px;
            font-weight: 300;
            
        }

        .active-nav-item{
            color: var(--color-green) !important;
            text-decoration: underline !important;
        }
    }


    .menu-icon{
        font-size: 2rem;
            color: ${({isDarkBg}) => isDarkBg ? "var(--color-light)" : "var(--color-dark)"};

    }

      @media (max-width: 880px) {

        .logo-icon{
            width: 100px !important;
        }

    padding: ${({isHomePage}) => !isHomePage ? "20px" : "0 20px" };


    }  

    @media (max-width: 600px) {



        .logo-icon{
            width: 90px !important;
        }

        .menu-icon{
            font-size: 1.6rem !important;
        }

    }  

`



const Topbar = () => {

    const path = useLocation().pathname

    const dispatch = useDispatch()

    const {windowDimensions} = useWindowDimensions()

    

  return (
    <Container isDarkBg={path === "/"} isHomePage={path === "/"}>

        <Link to={"/"}>
        <img src={path === "/" ? akcamLogo : akcamLogoDark } className="logo-icon" alt="" />
        </Link>
        {
            windowDimensions.width > 880 ?
                <div className="nav-list">
                    {
                        menuList.map(item => (
                            <Link to={item.path} className={path === item.path ? "active-nav-item nav-item" : "nav-item"} key={item.id}>
                                {item.text}
                            </Link>
                        ))
                    }
                </div>
                :
                <button onClick={() => dispatch(setMobileTopDropdownOpen(true))}>
                    <IoMenuOutline className="menu-icon"/>
                </button>

        }

    </Container>
  )
}

export default Topbar