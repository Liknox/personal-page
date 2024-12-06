import { useContext } from "react"
import { MobileViewContext } from "./context"

const useMobileView = () => {
   return useContext(MobileViewContext)
}

export { useMobileView }
