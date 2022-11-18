import styled from "styled-components"

const MyWrapper = styled.div`
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 225px;
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
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 43%;
  }

  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 36px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 168px;

    h1 {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 425px) {
    height: 111px;

    h1 {
      justify-content: right;
      margin: 0 110px 0 40px;
    }
  }
`

//Composant PageTop
function PageTop({ image, text }) {
  return (
    <MyWrapper>
      <h1>{text}</h1>
      <img src={image} alt="" />
    </MyWrapper>
  )
}

export default PageTop
