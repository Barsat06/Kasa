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
  height: 209px;
`

const Copyright = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 30px;
`
const HomeLogo = styled.img`
  padding-top: 66px;
`
//Composant Footer
function Footer() {
  return (
    <MyFooter>
      {/*Logo*/}
      <Link to={"/"}>
        <HomeLogo src={Logo} alt="Logo Kasa" />
      </Link>

      <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </MyFooter>
  )
}

export default Footer
