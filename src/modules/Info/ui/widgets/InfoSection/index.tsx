import { motion } from "framer-motion"
import styled from "styled-components"

const Container = styled(motion.div)`
	position: relative;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
	width: calc(100vw / 2);
	border: 1px solid var(--paper-border-secondary-color);
	height: calc(100vh - 100vh / 4);
	transition: border var(--timing-s) ease;
	overflow: hidden;
	padding: var(--spacing-m);

	&:hover {
		border: 1px solid var(--paper-border-color);
	}

	@media (max-width: 768px) {
		width: 100%;
		height: 100dvh;
	}
`

const InfoSection = () => {
   return <Container></Container>
}

export { InfoSection }
