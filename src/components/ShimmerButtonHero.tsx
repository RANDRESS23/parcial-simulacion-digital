'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ShimmerButton } from './magicui/shimmer-button'

export const ShimmerButtonHero = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null

  return (
    <ShimmerButton className="shadow-sm cursor-default px-6 py-2 flex justify-center items-center gap-x-2 mx-auto mb-2" background="bg-background" shimmerColor={theme === "dark" ? "#d5ebf856" : "#878f9252"}>
      <span className="whitespace-pre-wrap text-center text-xs md:text-sm/6 font-semibold leading-none text-neutral-700 dark:text-neutral-300">
        SIMULACIÓN DIGITAL
      </span>
    </ShimmerButton>
  )
}
