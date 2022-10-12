import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../utils/styles/colors"

//Création des différents composants avec "styled-components"
const ErrorWrapper = styled.div`
  color: ${colors.primary};
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
`
const BackHome = styled(Link)`
  font-size: 18px;
  font-weight: 500;
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
