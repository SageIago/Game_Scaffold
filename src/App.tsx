import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` // This applies to devices that are wider than 1024px
    }}>
      {/* NAVBAR */}
      <GridItem area={"nav"}>
        {/* THIS IS THE AREA FOR THE NAVBAR */}
        <Navbar />
      </GridItem>
      <Show above="lg">
      {/* ASIDE */}
      <GridItem area={"aside"}>
        Aside
      </GridItem>
      </Show>
      {/* MAIN CONTENT */}
      <GridItem area={"main"}>
      MAIN
      </GridItem>
    </Grid>
  )
}

export default App
