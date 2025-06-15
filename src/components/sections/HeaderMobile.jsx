
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { SlLocationPin } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    h3{
        font-size: 24px;
        font-weight: 600;
        color: var(--color-dark);
    }

    .project-desc-container{
        background-color: #F5F5F5;
        padding-left: 20px;
        border-radius: 4px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-top: 20px;
        .desc-item{
            display: flex;
            align-items: center !important;

            .desc-icon{
                font-size: 1.4rem;
                fill: #616161;


            }

            .desc-text{
                padding-left: 10px;
                font-size: 16px;
                font-weight: 500;
                color: var(--color-dark);
            }
        }


    }
`


const HeaderMobile = () => {
    const path = useLocation().pathname

    const { projectItem } = useSelector(state => state.project)
    const { isProjectPage } = useSelector(state => state.layout)

    const projectData = projectItem ? projectItem : JSON.parse(localStorage.getItem("projectItem"))

  return (
    <Container>
        {
            !isProjectPage &&
            <h3>{path === "/hakkimizda" ?  "Biz Kimiz ?" : path === "/imalat" ? "İmalat" : path === "/projeler" ? "Projeler" : "İletişim"}</h3>
        }
        {
            projectData &&
            <>
            <h3>{projectData.name}</h3>
            <div className="project-desc-container">
                <div className="desc-item">
                    <SlLocationPin className="desc-icon"/>
                    <span className="desc-text">{projectData.address}</span>
                </div>
                <div className="desc-item">
                    <CiCalendar className="desc-icon"/>
                    <span className="desc-text">{projectData.year}</span>
                </div>
            </div>
            </>
        }
    </Container>
  )
}

export default HeaderMobile