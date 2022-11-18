import styled from "styled-components"

const Text = styled.p`
  color: white;
  font-weight: 500;
  line-height: 143%;
  font-size: 14px;
  text-align: center;
  background-color: var(--primary-color);
  border-radius: 10px;
  padding: 3px 30px;

  @media screen and (max-width: 425px) {
    font-size: 10px;
    border-radius: 5px;
  }
`

//Composant Tag
function Tag({ tag }) {
  return (
    <div>
      <Text>{tag}</Text>
    </div>
  )
}

export default Tag
