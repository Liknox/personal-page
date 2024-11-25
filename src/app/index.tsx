import { Router } from "./providers/router"
import { GlobalStyles } from "./styles/globalStyles"

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Router />
		</>
	)
}

export { App }
