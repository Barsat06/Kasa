import star from "../../assets/star.svg"
import greyStar from "../../assets/greyStar.svg"
import styled from "styled-components"

const Rating = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`

//Composant Star
function Star(note) {
  const nbOfStar = parseInt(note.note)
  const nbOfGreyStar = 5 - nbOfStar

  return (
    <Rating>
      {[1, 2, 3].map(() => (
        <img src={star} alt={nbOfStar + "étoiles sur 5"} />
      ))}
      {[1, 2].map(() => (
        <img src={greyStar} alt={nbOfStar + "étoiles sur 5"} />
      ))}
    </Rating>
  )
}

export default Star
