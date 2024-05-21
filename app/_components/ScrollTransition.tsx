"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  Variants,
} from "framer-motion";
import { IDProps } from "@/Types/Types";
import { id } from "@/constants/constants";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const cardVariants: Variants = {
  offscreen: {
    y: 350,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Image({ title, description, image }: IDProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 0);

  return (
    <section className="scrollingmotion">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="flex items-center justify-center"
      >
        <div ref={ref} className="flex items-center">
          <motion.div
            className="flex items-start justify-center"
            variants={cardVariants}
          >
            <img
              src={image}
              className="bg-cover w-3/4"
              alt="A London skyscraper"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-col gap-4 justify-center">
        <motion.h2
          className="text-white text-5xl"
          style={{ y }}
        >{`${title}`}</motion.h2>
        <motion.h2
          className="text-white text-3xl"
          style={{ y }}
        >{`${description}`}</motion.h2>
      </div>
    </section>
  );
}

const ScrollTransition = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.01,
  });

  return (
    <div className="bg-black">
      <div style={{ scrollSnapAlign: "center" }}>
        {id.map(({ title, description, image }: IDProps) => (
          <>
            <Image title={title} description={description} image={image} />
          </>
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </div>
    </div>
  );
};

export default ScrollTransition;
