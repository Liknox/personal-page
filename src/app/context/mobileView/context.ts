import { createContext } from "react"

type MobileViewContextType = {
   mobile: boolean
}

const mobileView = () => innerWidth <= 768

const MobileViewContext = createContext<MobileViewContextType>({
   mobile: mobileView(),
})

export { MobileViewContext }
