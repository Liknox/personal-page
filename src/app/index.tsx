import { InitialAnimationContextProvider } from "./providers/initialAnimation"
import { Router } from "./providers/router"
import { GlobalStyles } from "./styles/globalStyles"

const App = () => {
   return (
      <>
      <InitialAnimationContextProvider>
         <GlobalStyles />
         <Router />
      </InitialAnimationContextProvider>
      </>
   )
}

export { App }
