"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
type IDProps = {
  title: string;
  description: string;
  image?: string;
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const id: IDProps[] = [
  {
    title: "The Card is just the start",
    description:
      "Everything you need to control spend and optimize finance operations, all on a single platform.",
    image: "/HomeCard.webp",
  },
  {
    title: "Global Corporate Card",
    description:
      "Control your spend globally with unlimited cards and full visibility",
    image: "/mobile.webp",
  },
  {
    title: "Expense Management",
    description:
      "Automate expense reporting and control employee expenses at scale",
    image: "/rsvp.webp",
  },
  {
    title: "Accounting automation",
    description:
      "Stay compliant, eliminate errors, and close your books faster.",
    image: "/restate.webp",
  },
  {
    title: "Accounts Payable",
    description:
      "Pay bills faster with automated approvals, anywhere you spend",
    image: "/restate.webp",
  },
];

function Image({ title, description, image }: IDProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 0);

  return (
    <section className="scrollingmotion">
      <div ref={ref} className="flex items-center ">
        <img src={image} className="bg-cover w-3/4" alt="A London skyscraper" />
      </div>
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

const LandingTransition = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.01,
  });

  return (
    <div className="">
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

export default LandingTransition;
