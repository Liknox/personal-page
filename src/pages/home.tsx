import { routesPaths } from "@app/configs/router"
import { createFileRoute } from "@tanstack/react-router"
import styled from "styled-components"

const Home = () => {
	return <p>Home</p>
}

export const Route = createFileRoute(routesPaths.home)({
	component: () => <Home />,
})
