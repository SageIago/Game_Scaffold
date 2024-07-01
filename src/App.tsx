import { Grid, GridItem, Show } from "@chakra-ui/react"
function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` // This applies to devices that are wider than 1024px
    }}>
      {/* NAVBAR */}
      <GridItem area={"nav"} bg={"yellow"}>
        Navbar
      </GridItem>
      <Show above="lg">
      {/* ASIDE */}
      <GridItem area={"aside"} bg={"blue"}>
        Aside
      </GridItem>
      </Show>
      {/* MAIN CONTENT */}
      <GridItem area={"main"} bg={"dodgerblue"}>
      MAIN
      </GridItem>
    </Grid>
  )
}

export default App
