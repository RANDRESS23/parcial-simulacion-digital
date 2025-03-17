"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { Particles } from "./magicui/particles";
import { useTheme } from "next-themes";
import { BlockMath } from "react-katex";

interface ConclusionProps {
  text1: string;
  math: string;
  text2: string;
}

export const Conclusion = ({ text1, math, text2 }: ConclusionProps) => {
  const { theme } = useTheme();

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-16">
      <Container className="py-20 max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
          <Particles
            refresh
            ease={80}
            quantity={80}
            color={theme === "dark" ? "#d4d4d4" : "#7c7b7b79"}
            className="hidden lg:block absolute inset-0 z-0"
          />
          <Particles
            refresh
            ease={80}
            quantity={35}
            color={theme === "dark" ? "#d4d4d4" : "#7c7b7b79"}
            className="block lg:hidden absolute inset-0 z-0"
          />

          <motion.div
            className="absolute -bottom-1/8 left-1/3 w-44 h-32 lg:h-60 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
            style={theme === "dark" ? {
              background:
                "conic-gradient(from 0deg at 50% 50%, #9E7AFF 0deg, #9E7AFF 180deg, #FE8BBB 360deg)",
            } : {
              background:
                "conic-gradient(from 0deg at 50% 50%, #9E7AFF 0deg, #FE8BBB 180deg, #FE8BBB 360deg)",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug font-orbitron">
            Paso N°11 - Conclusión
          </h2>
          <div className="max-w-2xl mx-auto mt-7 px-5">
            <p className="text-sm md:text-lg text-center text-accent-foreground/90 italic">
              {text1}
            </p>
            <BlockMath 
              math={math}
            />
            <p className="text-sm md:text-lg text-center text-accent-foreground/90 italic mt-2">
              {text2}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
