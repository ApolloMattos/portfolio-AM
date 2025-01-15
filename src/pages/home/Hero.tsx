export function Hero() {
  return (
    <div className="hero flex z-10 items-center h-full w-full  lg:w-9/12 px-8 md:px-16">
      <div className="hero-container grid auto-rows-min font-poppins">
        <h1 className="text-white font-medium text-3xl md:text-5xl">
          Olá, eu sou{" "}
          <span className="block text-4xl font-semibold text-vscode-green md:inline-block md:text-5xl">
            Apollo Mattos,
          </span>
        </h1>
        <h2 className="text-gray-300 font-light tracking-wider mt-1 text-2xl md:text-5xl md:font-medium md:tracking-normal">
          Desenvolvedor Front-end
        </h2>
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
