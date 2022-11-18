import Logo from "../../assets/logoWhite.svg"
import styled from "styled-components"
import { Link } from "react-router-dom"

//Création des différents composants avec "styled-components"
const MyFooter = styled.footer`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 143px;
  padding-top: 66px;
`

const Copyright = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 30px;

  @media screen and (max-width: 425px) {
    font-size: 12px;
    padding-bottom: 60px;
  }
`

//Composant Footer
function Footer() {
  return (
    <MyFooter>
      {/*Logo*/}
      <Link to={"/"}>
        <img src={Logo} alt="Logo Kasa" />
      </Link>

      <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </MyFooter>
  )
}

export default Footer
