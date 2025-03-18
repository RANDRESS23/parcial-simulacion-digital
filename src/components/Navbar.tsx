"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "./ThemeSwitch";
import { Link } from "next-view-transitions";
import { Home } from "./icons/Home";
import { MobileMenu } from "./MobileMenu";

export const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 md:max-w-2xl md:mx-auto z-50 mx-5", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex justify-between items-center w-full p-0">
          <Link href="/" className="p-2 rounded-md flex justify-center items-center transition-all hover:bg-accent gap-x-2">
            <Home />
            <span className="flex md:hidden font-orbitron font-extrabold">Simulación Digital</span>
          </Link>
          <div className="hidden md:flex">
            <MenuItem setActive={setActive} active={active} item="Ejercicios primer corte">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/ejercicio1-primer-corte">N°1 - Ejercicio de la moneda</HoveredLink>
                <HoveredLink href="/ejercicio2-primer-corte">N°2 - Ejercicio del dado</HoveredLink>
                <HoveredLink href="/ejercicio3-primer-corte">N°3 - Ejercicio de la moneda y el dado</HoveredLink>
              </div>
            </MenuItem>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <ThemeSwitch />
          </div>
        </div>
        <MobileMenu />
      </Menu>
    </div>
  );
}