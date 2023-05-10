import Map from "./components/Map.tsx";
import Input from "./components/Input.tsx";
import InfoCard from "./components/InfoCard.tsx";
import styled from "styled-components";


const Container = styled.div`
  text-align: center;
  background-image: url('../src/assets/pattern-bg-desktop.png');
  background-repeat: no-repeat;
  background-size: contain;
  @media(max-width: 375px) {
    background-image: url('../src/assets/pattern-bg-mobile.png');
  }
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 150px 1fr;
  
  & h1 {
    margin: 0;
    padding: 40px 0 0 0;
    font-family: var(--ff);
    color: #fff;
    font-weight: var(--fw-s);
    font-size: 28px;
  }
`

function App() {

  return (
      <>
          <Container>
              <h1>IP Address Tracker</h1>
              <Input/>
              <InfoCard />
              <Map/>
          </Container>
      </>

  )
}

export default App
