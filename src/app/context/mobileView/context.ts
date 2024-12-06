import { createContext } from "react"

type MobileViewContextType = {
   mobile: boolean
}

const MobileViewContext = createContext<MobileViewContextType>({
   mobile: false,
})

export { MobileViewContext }
