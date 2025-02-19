import { useSelectedSection } from "@app/context/selectedSection"
import { sectionsConfig } from "@modules/Info/configs/sections"
import { BackgroundCircle } from "@ui/BackgroundCircle"
import { motion } from "framer-motion"
import { type MouseEvent, useMemo, useState } from "react"
import styled from "styled-components"
import { Selector } from "./Selector"

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

const SectionContainer = styled.div`
	padding: var(--spacing-m);
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	flex-grow: 1;
	width: 100%;

	@media (max-width: 768px) {
		padding: 0;
		padding-bottom: var(--spacing-s);
	}
`

const InfoSection = () => {
   const { section } = useSelectedSection()
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

   const Component = useMemo(() => {
      return sectionsConfig.find(({ key }) => key === section)?.component || (() => null)
   }, [section])

   return (
      <Container onMouseMove={updateCursorPosition} onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
         <SectionContainer>
            <Component isHovered={isHovered} />
         </SectionContainer>
         <Selector isHovered={isHovered} />
         <BackgroundCircle {...backgroundCircleProps} />
      </Container>
   )
}

export { InfoSection }
