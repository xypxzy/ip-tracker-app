import styled from "styled-components";
import Map from "./components/Map.tsx";
import Input from "./components/Input.tsx";



const StyledMap = styled.div`
  height: 180px;
`

function App() {

  return <>
    <Input/>
    <Map />
  </>
}

export default App
