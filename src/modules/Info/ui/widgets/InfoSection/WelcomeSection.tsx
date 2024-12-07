import { WelcomeHandIcon } from "@ui/Icons"
import { AnimatedText } from "@ui/Text"
import { memo, useMemo } from "react"
import styled from "styled-components"

const Icon = styled(WelcomeHandIcon)`
	margin-bottom: var(--spacing-m);

	@media (max-width: 768px) {
		scale: 0.5;
		margin-bottom: -5px;
		margin-left: -10px;
	}
`

type Props = {
   isHovered: boolean
}

const WelcomeSection = memo(({ isHovered }: Props) => {
   const iconProps = useMemo(
      () => ({
         initial: { y: 40, opacity: 0 },
         animate: {
            y: 0,
            opacity: isHovered ? 1 : 0.5,
            rotate: isHovered ? 30 : 0,
         },
         transition: { type: "spring", stiffness: 500, damping: 30 },
      }),
      [isHovered],
   )

   return (
      <>
         <Icon {...iconProps} />
         <AnimatedText isHovered={isHovered} delay={0.1}>
            Hi there,
         </AnimatedText>
         <AnimatedText isHovered={isHovered} delay={0.2}>
            I'm Nazar Koval. A Software Engineer,
         </AnimatedText>
         <AnimatedText isHovered={isHovered} delay={0.3}>
            Craft perfect business solutions,
         </AnimatedText>
         <AnimatedText isHovered={isHovered} delay={0.4}>
            Burn my eyes out with colorful letters in the IDE.
         </AnimatedText>
         <AnimatedText isHovered={isHovered} delay={0.5}>
            Let's work together!
         </AnimatedText>
      </>
   )
})

export { WelcomeSection }
