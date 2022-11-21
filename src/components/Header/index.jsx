import Logo from "../../assets/logo.svg"
import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

//Création des différents composants avec "styled-components"
const MyHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  padding: 0px 100px;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 20px;

    img {
      width: 145px;
    }
  }
`

//Composant Header
function Header() {
  return (
    <MyHeader>
      {/* Logo */}
      <Link to={"/"}>
        <img src={Logo} alt="Logo Kasa" />
      </Link>

      <nav>
        {/* Lien Accueil */}
        <NavLink
          className={"styledLink"}
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "none",
            }
          }}
          to="/"
          end
        >
          Accueil
        </NavLink>
        {/* Lien A Propos */}
        <NavLink
          className={"styledLink"}
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "none",
            }
          }}
          to="/about"
        >
          A Propos
        </NavLink>
      </nav>
    </MyHeader>
  )
}

export default Header
