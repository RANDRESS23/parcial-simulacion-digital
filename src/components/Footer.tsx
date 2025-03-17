export const Footer = () => {
  return (
    <footer className="w-full py-7 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto max-w-5xl flex justify-between items-center flex-col">
        <span className="text-sm sm:text-center">© 2025 Simulación Digital</span>
        <hr className="my-4 w-full h-[1px] border-t-0 bg-neutral-200 dark:bg-white/10" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-3">
          <span className="italic">Raúl A. Quimbaya P.</span>
          <div className="hidden md:flex">|</div>
          <span className="italic">Daniel S. Ramírez A.</span>
          <div className="hidden md:flex">|</div>
          <span className="italic">Juan D. Rodríguez C.</span>
        </div>
      </div>
    </footer>
  );
};