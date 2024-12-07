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

export type BackgroundCircle = {
   style: Resolutions
   animate: Opacity
   initial: Opacity
   transition: Duration
}
