import { InitialAnimationContextProvider } from "./providers/initialAnimation"
import { MobileViewContextProvider } from "./providers/mobileView"
import { Router } from "./providers/router"
import { SelectedSectionContextProvider } from "./providers/selectedSection"
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
