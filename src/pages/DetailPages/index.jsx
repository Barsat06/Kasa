import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Tag from "../../components/Tags"
import Host from "../../components/Host"
import Star from "../../components/Star"
import Carrousel from "../../components/Carrousel"
import Collapse from "../../components/Collapse"

//Stylisation de la page
const DetailWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto 40px;
  padding: 0px 100px;

  .texts {
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
  }

  .leftCol {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1,
    h2 {
      color: var(--primary-color);
      font-weight: 500;
      line-height: 143%;
    }

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 18px;
    }

    .tags {
      display: flex;
      gap: 10px;
    }
  }

  .collapsable {
    display: flex;
    justify-content: space-between;
    gap: 80px;

    div {
      flex: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    .texts {
      flex-direction: column;
      margin-bottom: 0;
    }

    .leftCol {
      h1 {
        font-size: 30px;
      }
    }

    .rightCol {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 16px 0;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 20px;

    .collapsable {
      flex-direction: column;
      gap: 20px;
    }
  }

  @media screen and (max-width: 425px) {
    .leftCol {
      h1 {
        font-size: 18px;
      }

      h2 {
        font-size: 14px;
      }
    }
  }
`

function DetailPages() {
  const { locationId } = useParams()

  //Création de l'objet logement
  const [logement, setLogement] = useState({
    cover: "",
    title: "",
    location: "",
    rating: "0",
    host: {},
    tags: [],
    pictures: [],
    equipments: [],
  })

  const navigate = useNavigate()

  //Récupération des datas
  useEffect(() => {
    fetch(`http://localhost:3001/logements/${locationId}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error()
        }
      })

      .then((data) => setLogement(data))
      .catch(() => {
        navigate("/error")
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DetailWrapper className={"detailWrapper"}>
      {/* Création du composant Carrousel */}
      <Carrousel image={logement.pictures} />
      <div className={"texts"}>
        <div className={"leftCol"}>
          <div>
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </div>
          <div className={"tags"}>
            {/* Création des composants Tag */}
            {logement.tags.map((tag, index) => (
              <Tag key={tag + index} tag={tag} />
            ))}
          </div>
        </div>
        <div className={"rightCol"}>
          {/* Création du composant Host */}
          <Host name={logement.host.name} picture={logement.host.picture} />
          <div className={"star"}>
            {/* Création du composant Star */}
            <Star note={logement.rating} />
          </div>
        </div>
      </div>
      {/* Création des composants Collapse */}
      <div className="collapsable">
        <div>
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
        </div>
        <div>
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </DetailWrapper>
  )
}

export default DetailPages
