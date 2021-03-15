export const pageVariant1 = {
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "100vw"
    }
}

export const pageVariant2 = {
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "-100vw"
    }
}

export const pageVariant3 = {
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: "-100vh"
    }
}

export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
}

export const SvgVariantLogo = {
    hidden: { 
        opacity: 0,
        x: -50
    },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 3},
        ease: "easeInout"
    }
}

export const SvgVariantText = {
    hidden: {
         opacity: 0,
         x: 50
    },
    show: {
        opacity: 1,
         x: 0,
         transition: { duration: 3},
        ease: "easeInout"
    }
}

export const PathVariantLogo = {
    hidden: {
        pathLength: 0
    },
    show: {
        pathLength: 1,
        transition: {
            duration: 3,
            ease: "easeInOut"
        }
    }
}

export const HomeVariantTop = {
    static: {
        opacity:1
    },
    finish: {
        y: 0,
        x: 0,
        height: "150vh",
        opacity: 0,
        transition: {
            y: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    }
}

export const HomeVariantCenter = {
    static: {
        opacity:1
    },
    finish: {
        y: "-40vh",
        x: 0,
        height: "150vh",
        opacity: 0,
        transition: {
            y: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    }
}

export const HomeVariantBottom = {
    static: {
        opacity:1
    },
    finish: {
        y: "-60vh",
        x: 0,
        height: "140vh",
        opacity: 0,
        transition: {
            y: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    }
}
