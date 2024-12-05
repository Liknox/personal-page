import { SectionEnum } from "@app/context/selectedSection"
import type { FC } from "react"
import { ExperienceSection } from "../ui/widgets/InfoSection/ExperienceSection"
import { SkillsSection } from "../ui/widgets/InfoSection/SkillsSection"
import { WelcomeSection } from "../ui/widgets/InfoSection/WelcomeSection"

type SectionsConfigType = {
   key: SectionEnum
   displayName: string
   component: FC<{ isHovered: boolean }>
}[]

const sectionsConfig: SectionsConfigType = [
   {
      key: SectionEnum.welcome,
      displayName: "Welcome",
      component: WelcomeSection,
   },
   {
      key: SectionEnum.workExperience,
      displayName: "Experience",
      component: ExperienceSection,
   },
   {
      key: SectionEnum.technicalSkills,
      displayName: "Skills",
      component: SkillsSection,
   },
]
export { sectionsConfig }
