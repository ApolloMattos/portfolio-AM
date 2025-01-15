type SkillSetProps = {
  skillList: { name: string }[];
};

export function SkillSet({ skillList }: SkillSetProps) {
  return (
    <div className="text-xl font-consolas z-10 min-w-fit p-8 border border-solid border-white border-opacity-25 rounded-3xl ">

        <h1 className="font-normal">
          <span className="text-white text-opacity-40">{"<"}</span>
          <span className="text-vscode-blue-400">div </span>
          <span className="text-vscode-blue-200">className=</span>
          <span className="text-vscode-orange">"minhas-habilidades"</span>
          <span className="text-white text-opacity-40">{"/>"}</span>
        </h1>

        <ul className="relative after:h-full after:w-1px after:bg-white after:left-0.5 after:top-0 after:absolute after:opacity-20">
          {skillList.map((item) => (
            <li className="pl-4 leading-tight" key={item.name}>
              <span className="text-white text-opacity-40">{"< "}</span>
              <span className="text-vscode-green">{item.name}</span>
              <span className="text-white text-opacity-40">{" />"}</span>
            </li>
          ))}
        </ul>
        <span className="text-white text-opacity-40">{"<"}</span>
        <span className="text-vscode-blue-400">div</span>
        <span className="text-white text-opacity-40">{"/>"}</span>
      </div>
  );
}
