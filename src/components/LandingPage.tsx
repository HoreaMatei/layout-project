import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-80%"]);

  return (
    <div className="landing_page">
      <p>dasdsadsadsk gaga</p>
      <motion.section>
        <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#CEF144] before:opacity-[var(--opacity-border)]">
          <motion.p
            className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[23rem] text-heading"
            style={{ x: textX, y: "-50%" }}
            // className="scrolling-text"
          >
            hello
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
