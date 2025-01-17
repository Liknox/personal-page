import { ArrowRightOutlined } from "@ant-design/icons"
import { useInitialAnimation } from "@app/context/initialAnimation"
import { useMobileView } from "@app/context/mobileView"
import type { ContactItemConfigType as Props } from "@modules/Contact/configs"
import { BackgroundCircle } from "@ui/BackgroundCircle"
import { motion } from "framer-motion"
import { type MouseEvent, useEffect, useMemo, useState } from "react"
import styled from "styled-components"

const Container = styled(motion.div)`
	position: relative;
	width: calc(100vw / 3);
	border: 1px solid var(--paper-border-secondary-color);
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: flex-start;
	align-content: flex-start;
	padding: var(--spacing-m);
	height: calc(100vh / 4);
	cursor: pointer;
	transition: border var(--timing-s) ease;
	overflow: hidden;

	&:hover {
		border: 1px solid var(--paper-border-color);
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`

const NameContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: flex-end;
	align-content: flex-start;
	color: var(--secondary-color);
	width: 100%;
	white-space: nowrap;
	height: 50px;
	max-height: 50px;
	overflow: hidden;
`

const Name = styled(motion.span)`
	font: var(--font-xl);
	overflow: hidden;
	height: var(--font-line-height-xl);
	max-height: var(--font-line-height-xl);
`

const Arrow = styled(motion.span)`
	height: var(--font-line-height-xl);
	max-height: var(--font-line-height-xl);
	overflow: hidden;
	font: var(--font-xl);
`

const IndexContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-end;
	align-items: flex-start;
	align-content: flex-start;
	color: var(--secondary-color);
	height: var(--font-line-height-xl);
	max-height: var(--font-line-height-xl);
	overflow: hidden;

	@media (max-width: 768px) {
		visibility: hidden;
	}
`

const Index = styled(motion.span)`
	height: var(--font-line-height-xl);
	max-height: var(--font-line-height-xl);
	overflow: hidden;
	font: var(--font-xl);
`

const Item = ({ displayName, displayIndex, url, icon: Icon }: Props, index: number) => {
   const { mobile } = useMobileView()
   const { isOver: isInitialAnimationOver } = useInitialAnimation()
   const [isHovered, setIsHovered] = useState(false)
   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
   const [initialLoad, setInitialLoad] = useState(true)

   const handleOpen = () => window.open(url, "_blank")
   const handleHoverStart = () => setIsHovered(true)
   const handleHoverEnd = () => setIsHovered(false)

   const updateCursorPosition = (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()

      const { clientX, clientY } = e
      setCursorPosition({ x: clientX - rect.left, y: clientY - rect.top })
   }

   const indexProps = useMemo(
      () => ({
         animate: {
            y: isInitialAnimationOver ? 0 : -40,
            opacity: isHovered ? 1 : 0.5,
         },
         initial: {
            y: -40,
            opacity: 0,
         },
         transition: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            delay: initialLoad ? index * 0.2 + 0.1 : 0,
         },
      }),
      [isInitialAnimationOver, isHovered, index, initialLoad],
   )

   const nameProps = useMemo(
      () => ({
         animate: {
            y: isInitialAnimationOver ? (isHovered ? -10 : 0) : 40,
            opacity: mobile ? 1 : isHovered ? 1 : 0.5,
         },
         initial: {
            y: 40,
            opacity: 0,
         },
         transition: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            delay: initialLoad ? index * 0.2 + 0.2 : 0,
         },
      }),
      [isInitialAnimationOver, isHovered, index, initialLoad, mobile],
   )

   const arrowProps = useMemo(
      () => ({
         animate: {
            y: isInitialAnimationOver ? (isHovered ? -10 : 0) : 40,
            rotate: isHovered ? -45 : 0,
            opacity: mobile ? 1 : isHovered ? 1 : 0.5,
         },
         initial: { y: 40, rotate: 0, opacity: 0 },
         transition: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            delay: initialLoad ? index * 0.2 + 0.3 : 0,
         },
      }),
      [isHovered, isInitialAnimationOver, index, initialLoad, mobile],
   )

   const backgroundCircleProps = useMemo(
      () => ({
         style: { x: cursorPosition.x - 100, y: cursorPosition.y - 100 },
         animate: { opacity: isHovered ? 0.5 : 0 },
         initial: { opacity: 0 },
         transition: {
            type: "spring",
            stiffness: 500,
            damping: 30,
         },
      }),
      [cursorPosition, isHovered],
   )

   useEffect(() => {
      setInitialLoad(false)
   }, [])

   return (
      <Container
         onMouseMove={updateCursorPosition}
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         onClick={handleOpen}>
         <BackgroundCircle {...backgroundCircleProps} />
         {!mobile && (
            <IndexContainer>
               <Index {...indexProps}>{displayIndex}</Index>
            </IndexContainer>
         )}
         <NameContainer>
            <Name {...nameProps}>
               <Icon /> {displayName}
            </Name>
            <Arrow {...arrowProps}>
               <ArrowRightOutlined />
            </Arrow>
         </NameContainer>
      </Container>
   )
}

export { Item }
