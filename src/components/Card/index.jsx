import { Link } from "react-router-dom"
import styled from "styled-components"

//Création des différents composants avec "styled-components"
const CardWrapper = styled(Link)`
  height: 340px;
  width: 340px;
  position: relative;
  border-radius: 10px;
  transition: all 0.25s ease-out;

  &:hover {
    transform: scale(1.03);
  }

  &::after {
    content: "";
    position: absolute;
    border-radius: 10px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`

const CardCover = styled.img`
  height: 340px;
  width: 340px;
  object-fit: cover;
  border-radius: 10px;
`

const CardTitle = styled.h3`
  color: white;
  font-weight: 500;
  font-size: 18px;
  position: absolute;
  margin: 20px;
  bottom: 0;
  z-index: 1;
`

//Composant Card
function Card({ cover, title, id }) {
  return (
    <CardWrapper to={id}>
      <CardCover src={cover} alt={"Lien vers" + title} />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

export default Card
