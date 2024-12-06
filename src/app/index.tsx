import { InitialAnimationContextProvider } from "./providers/initialAnimation"
import { Router } from "./providers/router"
import { SelectedSectionContextProvider } from "./providers/selectedSection"
import { MobileViewContextProvider } from "./providers/mobileView"
import { GlobalStyles } from "./styles/globalStyles"

const App = () => {
   return (
      <InitialAnimationContextProvider>
         <MobileViewContextProvider>
            <SelectedSectionContextProvider>
               <GlobalStyles />
               <Router />
            </SelectedSectionContextProvider>
         </MobileViewContextProvider>
      </InitialAnimationContextProvider>
   )
}

export { App }
