import { useMobileView } from "@app/context/mobileView"
import { useSelectedSection } from "@app/context/selectedSection"
import type { SectionEnum } from "@app/context/selectedSection"
import { sectionsConfig } from "@modules/Info/configs/sections"
import { motion } from "framer-motion"
import { memo, useEffect, useMemo, useState } from "react"
import styled from "styled-components"

const options = sectionsConfig.map(section => {
   return {
      label: section.displayName,
      key: section.key,
   }
})

type LabelProps = {
   selected: boolean
}

const Label = styled(motion.button)<LabelProps>`
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

	&:hover {
		background: var(--paper-bg-secondary-color);
	}

	@media (max-width: 768px) {
		font: var(--font-xs);
	}
`

const Container = styled.div`
	position: static;
	bottom: 20px;
	overflow: hidden;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: center;
	align-content: center;
	max-height: 60px;
	height: 60px;
   @media (max-width: 768px) {
		position: absolute;
	}
`

const SelectorContainer = styled(motion.div)`
	position: static;
	z-index: 10;
	padding: var(--spacing-xs);
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	gap: var(--spacing-xs);
	background: var(--paper-bg-color);
	border-radius: var(--border-radius-xl);
`

const Bubble = styled(motion.span)`
	position: absolute;
	inset: 0;
	z-index: 10;
	background-color: var(--secondary-color);
	mix-blend-mode: difference;
	border-radius: var(--border-radius-xl);
`

type Props = {
   isHovered: boolean
}

const Selector = memo(({ isHovered }: Props) => {
   const { mobile } = useMobileView()
   const { section, setSection } = useSelectedSection()
   const [initialLoad, setInitialLoad] = useState(true)

   const handleSelect = (key: SectionEnum) => {
      setSection(key)
   }

   const containerProps = useMemo(
      () => ({
         animate: { opacity: mobile ? 1 : isHovered ? 1 : 0.5, y: isHovered ? -10 : 0 },
         initial: { opacity: 0, y: 40 },
         transition: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            delay: initialLoad ? 0.6 : 0,
         },
      }),
      [isHovered, initialLoad, mobile],
   )

   useEffect(() => {
      setInitialLoad(false)
   }, [])

   return (
      <Container>
         <SelectorContainer {...containerProps}>
            {options.map(({ key, label }) => {
               return (
                  <Label selected={key === section} onClick={() => handleSelect(key)} key={key}>
                     {label}
                     {key === section && (
                        <Bubble
                           layoutId="bubble"
                           transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                           }}
                        />
                     )}
                  </Label>
               )
            })}
         </SelectorContainer>
      </Container>
   )
})

export { Selector }
