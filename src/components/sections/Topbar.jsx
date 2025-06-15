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
    height: 65px;
    position: fixed;
    background: linear-gradient(179.28deg, rgba(255, 255, 255, 0.075) 0.62%, rgba(255, 255, 255, 0) 99.38%);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 30px;
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

    }

      @media (max-width: 880px) {

        .logo-icon{
            width: 100px !important;
        }

        padding: 0 20px !important;


    }  

    @media (max-width: 600px) {

        top: 15px !important;


        .logo-icon{
            width: 90px !important;
        }

        .menu-icon{
            font-size: 1.6rem !important;
        }

    }  

`



const Topbar = () => {

    const isDarkBg = false

    const path = useLocation().pathname

    const dispatch = useDispatch()

      const {windowDimensions} = useWindowDimensions()
    

  return (
    <Container isDarkBg={isDarkBg}>

        <Link to={"/"}>
        <img src={isDarkBg ? akcamLogo : akcamLogoDark } className="logo-icon" alt="" />
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