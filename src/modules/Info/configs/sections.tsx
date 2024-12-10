import { SectionEnum } from "@app/context/selectedSection"
import { type FC, Suspense, lazy } from "react"
import { ExperienceSection } from "../ui/widgets/InfoSection/ExperienceSection"
import { WelcomeSection } from "../ui/widgets/InfoSection/WelcomeSection"

const LazySkillsSection = lazy(() =>
   import("../ui/widgets/InfoSection/SkillsSection").then(module => ({
      default: module.SkillsSection,
   })),
)

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
      component: props => (
         <Suspense fallback={<div>Loading...</div>}>
            <LazySkillsSection {...props} />
         </Suspense>
      ),
   },
]
export { sectionsConfig }
