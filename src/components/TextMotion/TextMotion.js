import { useRef } from "react";
import { motion, useTransform, useScroll, useVelocity, useMotionValue, useAnimationFrame, useSpring } from "framer-motion";
import { wrap } from "@motionone/utils";
import { createUseStyles } from "react-jss";
import { useMediaQuery } from "react-responsive";

const useStyle = createUseStyles({
    parallax: {
        letterSpacing: '-2px',
        lineHeight: '0.8',
        marginLeft: '25px',
        transformOrigin: 'center center',
        whiteSpace: 'nowrap',
        display: 'flex',
        flexWrap: 'nowrap',
        cursor: 'default',
        pointerEvents: 'none',
        fontSize: '72px',
    },
    scroller: {
        fontWeight: '600',
        textTransform: 'uppercase',
        display: 'flex',
        whiteSpace: 'nowrap',
        flexWrap: 'nowrap',
        '& > span':{
            display: 'block',
            marginRight: '30px'
        }
    },

    redLeft: {
        position: 'absolute',
        left: '0',
        bottom: '100px',
        rotate: '15deg',
        color: 'var(--secondary-text-color)',
    },
    whiteRight: {
        position: 'absolute',
        left: '0',
        top: '-250px',
        rotate: '-16deg',
        color: 'var(--main-text-color-light)',
        fontSize: '52px'
    },
    redTransparent: {
        position: 'absolute',
        left: '0',
        top: '0',
        rotate: '-5deg',
        color: 'none',
        WebkitTextStroke: '1px white',
        fontSize: '45px'
    },
    whiteTransparent: {
        position: 'absolute',
        left: '0',
        bottom: '-50px',
        rotate: '5deg',
        color: 'none',
        WebkitTextStroke: '1px red',
        fontSize: '52px'
    },
})



function ParallaxText({ children, variant, baseVelocity = 100 }) {
    const style = useStyle();

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
      });
      const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
      });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
    });


  return (
    <div 
        className={`
            ${style.parallax}  
            ${variant === 'red' ? style.redLeft 
            : variant === 'white' ? style.whiteRight 
            : variant === 'transparent' ? style.redTransparent 
            : style.whiteTransparent}`}>
        <motion.div className={style.scroller} style={{ x }}>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
        </motion.div>
    </div>
  );
}

export default function TextMotion() {

    const isTablet = useMediaQuery({query: '(min-width:600px)'});
    return (
    <>
    {isTablet &&
        <>
            <ParallaxText baseVelocity={-3} variant='red'>I'm Nick</ParallaxText>
            <ParallaxText baseVelocity={1} variant='white'>Content Creator</ParallaxText>
            <ParallaxText baseVelocity={-2} variant='transparent'>Videographer</ParallaxText>
            <ParallaxText baseVelocity={1} variant='transparentWhite'>Photographer</ParallaxText>
        </>
    }
    </>
    );
}
