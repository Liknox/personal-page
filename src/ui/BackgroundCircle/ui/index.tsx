import { type BackgroundCircle as BackgroundCircleProps } from "@app/types/BackgroundCircle"
import { motion } from "framer-motion"
import styled from "styled-components"

const BackgroundCircleStyles = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background: radial-gradient(
		circle,
		color-mix(in srgb, var(--primary-color) 80%, transparent 100%),
		color-mix(in srgb, var(--primary-dark-color) 80%, transparent 100%)
	);
	filter: blur(50px);
	pointer-events: none;
`

const BackgroundCircle = (props: BackgroundCircleProps) => {
   return <BackgroundCircleStyles {...props} />
}

export { BackgroundCircle }
