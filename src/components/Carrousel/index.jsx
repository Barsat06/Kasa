import { useState } from "react"
import styled from "styled-components"
import NextArrow from "../../assets/nextArrow.svg"
import PrevArrow from "../../assets/prevArrow.svg"

const MyCarrousel = styled.div`
  position: relative;

  .carrouselImg {
    border-radius: 25px;
    height: 415px;
    width: 100%;
    object-fit: cover;
  }

  .arrow {
    transition: all 0.15s ease-out;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  .prevArrow {
    position: absolute;
    top: 41%;
    left: 25px;
  }

  .nextArrow {
    position: absolute;
    top: 41%;
    right: 25px;
  }

  .imgCounter {
    color: white;
    font-weight: 500;
    font-size: 18px;
    position: absolute;
    bottom: 25px;
    left: 48.7%;
  }

  @media screen and (max-width: 425px) {
    .carrouselImg {
      height: 255px;
    }

    .arrow {
      height: 20px;
    }

    .prevArrow {
      top: 46%;
      left: 5px;
    }

    .nextArrow {
      top: 46%;
      right: 5px;
    }

    .imgCounter {
      display: none;
    }
  }
`

//Composant Carrousel
function Carrousel(images) {
  //Définition du nombre d'image
  const nbOfImage = images.image.length
  const [actualImageNb, setActualImageNb] = useState(0)

  //Création de la fonction pour aller à l'image précedente
  const prevImg = () => {
    let prev = actualImageNb - 1
    if (prev < 0) prev = nbOfImage - 1

    setActualImageNb(prev)
  }

  //Création de la fonction pour aller à l'image suivante
  const nextImg = () => {
    let next = actualImageNb + 1
    if (next > nbOfImage - 1) next = 0

    setActualImageNb(next)
  }

  return (
    <MyCarrousel>
      <img
        src={PrevArrow}
        alt="Précedent"
        className="prevArrow arrow"
        onClick={prevImg}
      />
      <img
        src={NextArrow}
        alt="Suivant"
        className="nextArrow arrow"
        onClick={nextImg}
      />

      {/* Image actuelle */}
      <img src={images.image[actualImageNb]} alt="" className="carrouselImg" />

      <p className="imgCounter">
        {actualImageNb + 1} / {nbOfImage}
      </p>
    </MyCarrousel>
  )
}

export default Carrousel
