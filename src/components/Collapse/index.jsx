import styled from "styled-components"
import DownArrow from "../../assets/downArrow.svg"
import { useState } from "react"

const MyCollapse = styled.div`
  background-color: var(--secondary-color);
  border-radius: 10px;

  .close {
    display: none;
  }
`

const Content = styled.div`
  padding: 40px 20px;
  color: var(--primary-color);
  font-size: 18px;
  line-height: 26px;
`

const MyTitle = styled.div`
  display: flex;
  background-color: var(--primary-color);
  border-radius: 10px;
  padding: 13px 20px;
  line-height: 26px;
  color: white;
  cursor: pointer;

  img {
    transition: transform 0.4s ease;
  }

  .turnArrow {
    transform: rotate(-180deg);
  }

  h3 {
    flex: 1;
    font-size: 18px;
    font-weight: 500;
  }
`

//Composant Collapse
function Collapse({ title, children }) {
  //Initialisation du state isOpen
  const [isOpen, setIsOpen] = useState(false)

  //Fonction qui change l'état de isOpen
  const fold = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <MyCollapse>
      {/* Titre du Collapse */}
      <MyTitle onClick={fold}>
        <h3>{title}</h3>
        <img src={DownArrow} alt="" className={isOpen ? "turnArrow" : ""} />
      </MyTitle>

      {/* Contenu du Collapse */}
      <Content className={isOpen ? "" : "close"}>{children}</Content>
    </MyCollapse>
  )
}

export default Collapse
