import { routesPaths } from "@app/configs/router"
import { useInitialAnimation } from "@app/context/initialAnimation"
import { createFileRoute } from "@tanstack/react-router"
import styled from "styled-components"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	width: 100%;
`

const TopContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	width: 100%;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const Home = () => {
   const { isOver } = useInitialAnimation()
   console.log(isOver)

   return (
      <Container>
         <TopContainer>123</TopContainer>
         123
      </Container>
   )
}

export const Route = createFileRoute(routesPaths.home)({
   component: () => <Home />,
})
