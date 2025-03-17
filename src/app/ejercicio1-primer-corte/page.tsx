import { PasoCard } from "@/components/PasoCard";
import Container from "@/components/Container";
import { Spotlight } from "@/components/ui/spotlight";
import { AmountThrow } from "@/components/AmountThrow";

export default function Ejercicio1() {
  return (
    <main className="w-full relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="w-full h-full relative z-40">
        <Spotlight className="-top-80 -left-10 md:-left-96 h-screen hidden lg:flex" fill="white" />
      </div>
      <section className="py-24 px-4 md:px-6 lg:px-8 relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-14 md:mb-16">
          <Container>
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-6 font-orbitron">
                Ejercicio N°1 - Ejercicio de la moneda
              </h2>
              <p className="text-base md:text-lg text-center mt-6 text-gray-600 dark:text-gray-400 italic">
                Aqui podras encontrar los pasos para resolver el ejercicio de la moneda
              </p>
            </div>
          </Container>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 relative overflow-visible py-5 px-6 md:max-w-4xl w-full">
            <PasoCard 
              index={0}
              title="Paso N°1" 
              description="Espacio muestral"
              math="\cap : \{ \text{Cara}, \text{Sello} \}"
            />
            <PasoCard 
              index={1}
              title="Paso N°2" 
              description="Discriminar eventos"
              math="A = \{ \text{Cara} \} \quad B = \{ \text{Sello} \}"
            />
            <PasoCard
              index={2}
              title="Paso N°3"
              description="Encontrar la probabilidad de cada evento"
              math="P(A) = \frac{1}{2} = 0.5 \quad P(B) = \frac{1}{2} = 0.5"
            />
            <PasoCard
              index={3}
              title="Paso N°4"
              description="Diagrama de árbol"
              math="
                M \begin{array}{c}
                \nearrow \text{Cara} \\
                \searrow \text{Sello}
                \end{array}
              "
            />
            <PasoCard
              index={4}
              title="Paso N°5"
              description="Codificar"
              math="
                \begin{array}{c|c}
                \text{Cara} & \text{Sello} \\
                \hline
                1 & 2
                \end{array}
              "
            />
            <PasoCard
              index={5}
              title="Paso N°6"
              description="Encontrar el valor esperado"
              math="
                \begin{aligned}
                  U_e &= 1 \left( \frac{1}{2} \right) + 2 \left( \frac{1}{2} \right) \\
                  U_e &= 0.5 + 1 \\
                  U_e &= 1.5
                \end{aligned}
              "
            />
          </div>
        </div>
      </section>
      
      <section className="-my-8 px-4 md:px-6 lg:px-8 relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-12">
          <Container>
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-heading font-bold mt-6">
                Paso N°7 - Lanzamientos
              </h2>
              <p className="text-base md:text-lg text-center mt-6 text-gray-600 dark:text-gray-400 italic">
                En esta sección tendrás que definir la cantidad de lanzamientos de la moneda para poder continuar y hallar el margen de error del ejercicio planteado
              </p>
            </div>
          </Container>
        </div>

        <AmountThrow />
      </section>
    </main>
  )
}
