import styled from "styled-components"
import { Link } from "react-router-dom"

//Création des différents composants avec "styled-components"
const ErrorWrapper = styled.div`
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 160px;
`
const Text = styled.p`
  font-size: ${(props) => (props.numero ? "288px" : "36px")};
  font-weight: ${(props) => (props.numero ? "700" : "500")};
  padding-bottom: ${(props) => (props.numero ? "66px" : "180px")};
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.numero ? "192px" : "27px")};
  }

  @media screen and (max-width: 425px) {
    font-size: ${(props) => (props.numero ? "96px" : "18px")};
  }
`
const BackHome = styled(Link)`
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`

//Composant Error
function Error() {
  return (
    <ErrorWrapper>
      <Text numero>404</Text>
      <Text>Oups! La page que vous demandez n'existe pas.</Text>
      <BackHome to={"/"}>Retourner sur la page d’accueil</BackHome>
    </ErrorWrapper>
  )
}

export default Error
