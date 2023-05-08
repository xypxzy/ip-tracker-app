import Map from "./components/Map.tsx";
import Input from "./components/Input.tsx";
import InfoCard from "./components/InfoCard.tsx";
import styled from "styled-components";

import bgImageDesktop from './assets/pattern-bg-desktop.png'
import bgImageMobile from './assets/pattern-bg-mobile.png'

const Container = styled.div`
  text-align: center;
  background-image: url('./assets/pattern-bg-desktop.png');
  
  @media(max-width: 375px) {
    background-image: url('./assets/pattern-bg-mobile.png');
  }
`

const Image = styled.image`
  
`
function App() {

  return (
      <Container>
        <Image >
          {bgImageDesktop}
        </Image>
          <Input/>
          <InfoCard/>
          <Map />
      </Container>
  )
}

export default App
