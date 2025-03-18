'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import Link from 'next/link'
import { IoMenu } from 'react-icons/io5'
import { ThemeSwitch } from './ThemeSwitch'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <button className="md:hidden">
          <div className='text-2xl'>
            <IoMenu />
          </div>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[300px] pt-12 z-[110]">
        <div className='absolute top-4 left-4 flex justify-center items-center gap-x-2'>
          <span className="font-orbitron text-xl font-extrabold">Simulación Digital</span>
        </div>
        <SheetHeader className="mt-5">
          <SheetTitle className="text-left text-xl font-bold">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mx-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="ejercicios-primer-corte" className="border-b-0">
              <AccordionTrigger className="text-base text-left font-medium py-2 hover:no-underline">
                Ejercicios primer corte
              </AccordionTrigger>
              <AccordionContent className="pt-1 pb-2">
                <div className="flex flex-col space-y-2 pl-4">
                  <SheetPrimitive.Close asChild>
                    <Link
                      className="text-sm text-left font-medium transition-colors cursor-pointer hover:text-primary"
                      href="/ejercicio1-primer-corte"
                    >
                      N°1 - Ejercicio de la moneda
                    </Link>
                  </SheetPrimitive.Close>
                  <SheetPrimitive.Close asChild>
                    <Link
                      className="text-sm text-left font-medium transition-colors cursor-pointer hover:text-primary"
                      href="/ejercicio2-primer-corte"
                    >
                      N°2 - Ejercicio del dado
                    </Link>
                  </SheetPrimitive.Close>
                  <SheetPrimitive.Close asChild>
                    <Link
                      className="text-sm text-left font-medium transition-colors cursor-pointer hover:text-primary"
                      href="/ejercicio3-primer-corte"
                    >
                      N°3 - Ejercicio de la moneda y el dado
                    </Link>
                  </SheetPrimitive.Close>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </nav>
        <div className='flex justify-center mt-2 pt-2 border-t border-neutral-300 dark:border-neutral-700 mx-4'>
          <div className="w-9 md:w-11">
            <div className="flex justify-center items-center">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}