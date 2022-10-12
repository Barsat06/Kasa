import Logo from "../../assets/logoWhite.svg"
import styled from "styled-components"

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
  padding-bottom: 30px;
`
const HomeLogo = styled.img`
  width: 122px;
  padding-top: 66px;
`
//Fonction du Footer
function Footer() {
  return (
    <MyFooter>
      <HomeLogo src={Logo} alt="Logo Kasa" />
      <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </MyFooter>
  )
}

export default Footer
