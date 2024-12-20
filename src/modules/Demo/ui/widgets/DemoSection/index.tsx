import { BackgroundCircle } from "@ui/BackgroundCircle"
import { motion } from "framer-motion"
import { type MouseEvent, useMemo, useState } from "react"
import styled from "styled-components"
import { Content } from "./Content"

const Container = styled(motion.div)`
	position: relative;

	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
	width: calc(100vw / 2);
	padding: var(--spacing-m);
	border: 1px solid var(--paper-border-secondary-color);
	height: calc(100vh - 100vh / 4);
	transition: border var(--timing-s) ease;
	overflow: hidden;

	&:hover {
		border: 1px solid var(--paper-border-color);
	}

	@media (max-width: 768px) {
      display: none;
	}
`

const DemoSection = () => {
   const [isHovered, setIsHovered] = useState(false)
   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

   const handleHoverStart = () => setIsHovered(true)
   const handleHoverEnd = () => setIsHovered(false)

   const backgroundCircleProps = useMemo(
      () => ({
         style: { x: cursorPosition.x - 100, y: cursorPosition.y - 100 },
         animate: { opacity: isHovered ? 0.5 : 0 },
         initial: { opacity: 0 },
         transition: { duration: 0.1 },
      }),
      [cursorPosition, isHovered],
   )

   const updateCursorPosition = (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()

      const { clientX, clientY } = e
      setCursorPosition({ x: clientX - rect.left, y: clientY - rect.top })
   }

   return (
      <Container onMouseMove={updateCursorPosition} onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
         <BackgroundCircle {...backgroundCircleProps} />
         <Content isHovered={isHovered} />
      </Container>
   )
}

export { DemoSection }
