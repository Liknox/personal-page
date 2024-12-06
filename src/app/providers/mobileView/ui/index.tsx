import { MobileViewContext } from "@app/context/mobileView/context"

type Props = {
   children: React.ReactNode
}

const mobileView = () => innerWidth <= 768
const mobile = mobileView()

const MobileViewContextProvider = ({ children }: Props) => {
   return <MobileViewContext.Provider value={{ mobile: mobile }}>{children}</MobileViewContext.Provider>
}

export { MobileViewContextProvider }
