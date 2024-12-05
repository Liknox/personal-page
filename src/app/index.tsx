import { InitialAnimationContextProvider } from "./providers/initialAnimation"
import { Router } from "./providers/router"
import { GlobalStyles } from "./styles/globalStyles"
import { SelectedSectionContextProvider } from "./providers/selectedSection"

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
