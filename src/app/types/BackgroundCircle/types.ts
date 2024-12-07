type Opacity = {
   opacity: number
}

type Resolutions = {
   x: number
   y: number
}

type Duration = {
   duration: number
}

type Spring = {
   type: string
   stiffness: number
   damping: number
}

export type BackgroundCircleType = {
   style: Resolutions
   animate: Opacity
   initial: Opacity
   transition: Duration | Spring
}
