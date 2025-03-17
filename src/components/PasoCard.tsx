'use client'

import Container from './Container'
import { cn } from '@/lib/utils'
import { MagicCard } from './magicui/magic-card'
import { useTheme } from 'next-themes'
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

interface CardProps {
  index: number
  title: string
  description: string
  math: string
}

export const PasoCard = ({ index, title, description, math }: CardProps) => {
  const { theme } = useTheme();

  return (
    <Container
      delay={0.1 + index * 0.1}
      className={cn(
        'relative flex flex-col rounded-2xl transition-colors',
        index === 1 && 'lg:col-span-2',
        index === 2 && 'lg:col-span-2',
        index === 22 && 'lg:col-span-2 hidden lg:flex',
        index === 32 && 'lg:col-span-2 lg:hidden flex',
        index === 5 && 'lg:col-span-2',
        index === 30 && 'lg:col-span-3 hidden lg:flex',
        index === 40 && 'lg:col-span-3 lg:hidden flex',
      )}
    >
      <MagicCard
        className="p-4 lg:p-6 lg:rounded-3xl h-full"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className='flex flex-col h-full'>
          <div className="flex items-center space-x-4 mb-2">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {title}
            </h3>
          </div>
          {
            description && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {description}:
              </p>
            )
          }
          <div className='flex-1 flex items-center justify-center'>
            <BlockMath math={math} />
          </div>
        </div>
      </MagicCard>
    </Container>
  )
}
