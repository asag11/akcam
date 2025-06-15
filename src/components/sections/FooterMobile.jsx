

import styled from "styled-components"
import menuList from "../../utils/menuList"
import { NavLink, useLocation } from "react-router-dom"
import instagramLogo from "../../images/instagram.svg"
import linkedinLogo from "../../images/linkedin.svg"

const Container = styled.nav`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: var(--color-gray);
    gap: 20px;
    margin-top: 40px !important;


    .nav-list{
        display: flex;
        justify-content: center;
        gap: 23px;
        width: 100%;
        
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

    .bt{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;


    .icon-list{
        display: flex;
        align-items: center;
        gap: 20px;

        a{
            display: flex;
            align-items: center;
        }
    }

    }
`

const FooterMobile = () => {

    const path = useLocation().pathname

  return (
    <Container>
              <div className="nav-list">
                {
                    menuList.map(item => (
                        <NavLink to={item.path} className={path === item.path ? "active-nav-item nav-item" : "nav-item"}  key={item.id}>
                            {item.text}
                        </NavLink>
                    ))
                }
        </div>
        <div className="bt">
            <div className="cp">&copy; {new Date().getFullYear()} Akçam Dekor Line</div>
             <div className="icon-list">
                <a href="https://www.instagram.com/akcammobilya/" rel="noreferrer" target="_blank">
                    <img src={instagramLogo} alt="" />
                </a>
                <img src={linkedinLogo} alt="" />
            </div>
        </div>

  

       

    </Container>
  )
}

export default FooterMobile