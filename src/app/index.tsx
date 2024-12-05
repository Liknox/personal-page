import { InitialAnimationContextProvider } from "./providers/initialAnimation"
import { Router } from "./providers/router"
import { SelectedSectionContextProvider } from "./providers/selectedSection"
import { GlobalStyles } from "./styles/globalStyles"

const App = () => {
   return (
      <InitialAnimationContextProvider>
         <SelectedSectionContextProvider>
            <GlobalStyles />
            <Router />
         </SelectedSectionContextProvider>
      </InitialAnimationContextProvider>
   )
}

export { App }
