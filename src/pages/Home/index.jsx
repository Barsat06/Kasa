import styled from "styled-components"
import Card from "../../components/Card/index"
import img from "../../assets/imgHome.png"
import { useState, useEffect } from "react"

//Création des différents composants avec "styled-components"
const HomeWrapper = styled.main`
  margin: 40px auto;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 0px 100px;
`

const Title = styled.div`
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.15);

  h1 {
    font-weight: 500;
    font-size: 48px;
    color: white;
    position: absolute;
    z-index: 1;
  }

  img {
    mix-blend-mode: darken;
    height: 225px;
    width: 1240px;
    object-fit: cover;
    object-position: 50% 43%;
  }
`
const CardContainer = styled.div`
  border-radius: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px 60px;
  background: var(--secondary-color);
  padding: 55px 0;
`

//Page Home
function Home() {
  const [logements, setLogements] = useState([])

  //Récupération des datas
  useEffect(() => {
    fetch("http://localhost:3001/logements")
      .then((res) => res.json())
      .then((data) => setLogements(data))
  }, [])

  //Affichage des locations(Card)
  return (
    <HomeWrapper>
      <Title>
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={img} alt="" />
      </Title>
      <CardContainer>
        {logements.map((logements) => (
          <Card
            key={logements.id}
            id={logements.id}
            cover={logements.cover}
            title={logements.title}
          />
        ))}
      </CardContainer>
    </HomeWrapper>
  )
}

export default Home
