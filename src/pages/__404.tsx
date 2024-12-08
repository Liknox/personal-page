import { createFileRoute, Link } from "@tanstack/react-router"
import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import styled from "styled-components"

export const Route = createFileRoute("/__404")({
   component: () => <NotFound />,
})

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
	height: 100%;
`
const Button = styled(motion.button)`
	color: var(--secondary-color);
	padding: var(--spacing-xs) var(--spacing-m);
	border-radius: var(--border-radius-xl);
	cursor: pointer;
	transition: background var(--timing-s) ease;
	position: relative;
	border-radius: 9999px;
	padding: 0.375rem 0.75rem;
	font-size: 0.875rem;
	font-weight: 500;
	outline: 2px solid transparent;
	-webkit-tap-highlight-color: transparent;
	background: var(--secondary-color);
	margin-top: var(--spacing-xs);

	a {
		color: black;
		text-decoration: none;
	}
`

const NotFound = () => {
   const [isHovered, setIsHovered] = useState(false)

   const handleHoverStart = () => setIsHovered(true)
   const handleHoverEnd = () => setIsHovered(false)

   const iconProps = useMemo(
      () => ({
         initial: { opacity: 0 },
         animate: {
            opacity: isHovered ? 1 : 0.5,
         },
         transition: { type: "spring", stiffness: 500, damping: 30 },
      }),
      [isHovered],
   )

   return (
      <Container>
         Page Not Found
         <Button {...iconProps} onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
            <Link to="/">Return Home</Link>
         </Button>
      </Container>
   )
}
