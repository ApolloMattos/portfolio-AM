export function Hero() {
  return (
    <div className="hero flex items-center h-full w-3/5 z-10">
      <div className="hero-container grid auto-rows-min">
        <h1 className="text-white font-medium">
          Olá, eu sou <span className="font-semibold">Apollo Mattos</span>,
        </h1>
        <h2 className="text-gray-300">Desenvolvedor Front-end</h2>
        <h3 className="text-gray-400 tracking-wider mt-4 mb-8">PR - BRASIL</h3>
        <p className="text-white leading-normal tracking-wide font-light">
          Desenvolvo Websites combinando o Design, o Front-end e,
          ocasionalmente, Back-end para garantir resultados robustos e
          funcionais.
        </p>
      </div>
    </div>
  );
}
