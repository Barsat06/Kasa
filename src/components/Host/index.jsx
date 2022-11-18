import styled from "styled-components"

const MyHost = styled.div`
  color: var(--primary-color);

  display: flex;
  align-items: center;

  p {
    font-weight: 500;
    line-height: 143%;
    font-size: 18px;
    text-align: right;

  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 10px;
  }
`

//Composant Host
function Host(host) {
  return (
    <MyHost>
      <p>{host.name}</p>
      <img src={host.picture} alt={host.name} />
    </MyHost>
  )
}

export default Host
