
import styled from "styled-components"
import menuList from "../../utils/menuList"
import closeIcon from "../../images/close-icon.svg"
import { useDispatch } from "react-redux"
import { setMobileTopDropdownOpen } from "../../features/layout/layoutSlice"
import { Link, useLocation } from "react-router-dom"

const Container = styled.div`

    position: fixed;
    top: 20px;
    right: 0;
    background-color: #fff;
    color: var(--color-dark);
    z-index: 20;
    width: 200px;
    border-radius: 4px;


    .nav-list{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 30px;
        gap: 20px;
        position: relative;

        
        .nav-item{
            background-color: transparent;
            color: ${({isDarkBg}) => isDarkBg ? "var(--color-light)" : "#424242"};
            font-size: 14px;
            font-weight: 600;
            
        }

        .active-nav-item{
            color: var(--color-green) !important;
            text-decoration: underline !important;
        }

        .close-btn{
            position: absolute;
            top: 20px;
            left: 15px;
            
            .close-icon{
                width: 16px;
                fill: #424242;
            }
        }
    }



    
`



const MobileTopDropdown = () => {

    const dispatch = useDispatch()

    const path = useLocation().pathname


  return (
    <Container>

      

        <div className="nav-list">

            <button className="close-btn" onClick={() => dispatch(setMobileTopDropdownOpen(false))}>
                <img className="close-icon" src={closeIcon} alt="" />
            </button>

            {
                menuList.map(item => (
                    <Link to={item.path} onClick={() => dispatch(setMobileTopDropdownOpen(false))} className={path === item.path ? "active-nav-item nav-item" : "nav-item"} key={item.id}>
                        {item.text}
                    </Link>
                ))
            }
        </div>
    </Container>
  )
}

export default MobileTopDropdown