import star from "../../assets/star.svg"
import greyStar from "../../assets/greyStar.svg"
import styled from "styled-components"

const Rating = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;

  @media screen and (max-width: 425px) {
    margin: 8.5px 0;
    gap: 5px;

    img {
      width: 15px;
    }
  }
`

//Composant Star
function Star(note) {
  const nbOfStar = parseInt(note.note)
  const nbOfGreyStar = 5 - nbOfStar
  let starOn = new Array(nbOfStar)
  let StarOff = new Array(nbOfGreyStar)

  return (
    <Rating>
      {/* Crée un Array (qu'on peut .map) en fonction du
      nombre d'itération (égale au nombre d'étoile) */}
      {Array.from(starOn.keys()).map((index) => (
        <img
          src={star}
          alt={nbOfStar + " étoiles sur 5"}
          key={"pink" + index}
        />
      ))}
      {Array.from(StarOff.keys()).map((index) => (
        <img
          src={greyStar}
          alt={nbOfStar + " étoiles sur 5"}
          key={"grey" + index}
        />
      ))}
    </Rating>
  )
}

export default Star
