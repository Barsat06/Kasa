import styled from "styled-components"
import Card from "../../components/Card/index"
import PageTop from "../../components/PageTop"
import img from "../../assets/imgHome.png"
import { useState, useEffect } from "react"

//Création des différents composants avec "styled-components"
const HomeWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 0 100px 100px 100px;

  @media screen and (max-width: 1024px) {
    gap: 20px;
    padding: 0 20px 20px 20px;
  }
`

const CardContainer = styled.div`
  border-radius: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px 60px;
  background: var(--secondary-color);
  padding: 55px 42px;

  @media screen and (max-width: 1024px) {
    gap: 20px;
    background: white;
    padding: 0;
  }
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
      <PageTop image={img} text="Chez vous, partout et ailleurs" />
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
