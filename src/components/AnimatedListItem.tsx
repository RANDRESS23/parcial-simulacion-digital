'use client'

import { cn } from "@/lib/utils";
import { RiCoinFill } from "react-icons/ri";
import { motion } from 'framer-motion'

interface Item {
  name: string;
  description: string;
}

export const AnimatedListItem = ({ name, description }: Item) => {
  return (
    <motion.figure
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      className={cn(
        "relative min-h-fit w-[130px] overflow-hidden rounded-2xl p-2",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-8 items-center justify-center rounded-2xl bg-accent"
        >
          <RiCoinFill />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm">{name}</span>
          </figcaption>
          <p className="text-xs font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </motion.figure>
  );
};