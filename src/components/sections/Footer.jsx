import styled from "styled-components"
import menuList from "../../utils/menuList"
import { NavLink, useLocation } from "react-router-dom"
import instagramLogo from "../../images/instagram.svg"
import linkedinLogo from "../../images/linkedin.svg"

const Container = styled.nav`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    color: var(--color-gray);
    margin-top: 30px;

    .nav-list{
        display: flex;
        gap: 20px;

        
        .nav-item{
            background-color: transparent;
            color: ${({isDarkBg}) => isDarkBg ? "var(--color-light)" : "var(--color-gray)"};
            font-size: 18px;
            font-weight: 300;
            
        }
        
        .active-nav-item{
            color: var(--color-green) !important;
            text-decoration: underline !important;
        }
    }

    .icon-list{
        display: flex;
        align-items: center;
        gap: 20px;

        a{
            display: flex;
            align-items: center;
        }
    }

      @media (max-width: 880px) {

        padding: 0 20px !important;
        margin-top: 40px !important;

        .nav-list{
            display: none !important;
        }
    }  

`

const Footer = () => {

    const path = useLocation().pathname

  return (
    <Container>
        <div className="cp">&copy; {new Date().getFullYear()} Akçam Dekor Line</div>

        <div className="nav-list">
            {
                menuList.map(item => (
                    <NavLink to={item.path} className={path === item.path ? "active-nav-item nav-item" : "nav-item"}  key={item.id}>
                        {item.text}
                    </NavLink>
                ))
            }
        </div>

        <div className="icon-list">
            <a href="https://www.instagram.com/akcammobilya/" rel="noreferrer" target="_blank">
                <img src={instagramLogo} alt="" />
            </a>
            <img src={linkedinLogo} alt="" />
        </div>

    </Container>
  )
}

export default Footer