import Image from "next/image";

export default function CategoryFace({ id, name, illustrated = false }) {
  if (illustrated) return <SpaceIllustration id={id} />;
  return (
    <div className="bf-card-content">
      <Image src={`/categories/${id}.png`} width={1536} height={1024} sizes="174px" alt="" />
      <span>{name}</span>
    </div>
  );
}

function SpaceIllustration({ id }) {
  const scenes = {
    ropa: <><path d="M57 44 76 34h28l19 10 15 27-19 11-7-13v65H68V69L61 82 42 71Z" fill="#b18aa2"/><path d="M76 34q14 20 28 0M68 104h44"/><path d="M129 99h30v38h-30z" fill="#e4b780"/><path d="M134 99v-9q10-15 20 0v9"/></>,
    botiquin: <><rect x="44" y="61" width="106" height="73" rx="13" fill="#f2e8df"/><path d="M77 61V47h40v14"/><path d="M87 80h19v14h14v18h-14v14H87v-14H73V94h14Z" fill="#bb7e89" stroke="none"/><rect x="143" y="93" width="19" height="43" rx="5" fill="#bdc7b1"/><path d="M147 87h11v7"/></>,
    herramientas: <><path d="m46 68 54-10 21 22-12 20H75v35H52V93H38V75Z" fill="#bc9a66"/><path d="M99 67h37v18h-27M52 110h23M48 136h34"/><path d="m134 113 15-34 12 5-15 34" fill="#b7b7c1"/><path d="m128 112 16 7-8 19-16-7Z" fill="#9b7a90"/></>,
    oficina: <><rect x="43" y="62" width="66" height="72" rx="5" fill="#c0c9b2"/><path d="M53 62v72M64 80h32M64 91h32M64 102h24"/><path d="m125 130 16-66 10 3-16 66-9 8Z" fill="#d4ae76"/><path d="M137 73l11 3"/><path d="M117 136h43"/></>,
    colecciones: <><path d="M47 49h113v86H47Z" fill="#e2d6c8"/><path d="M55 58h97v69H55Z" fill="#fbf6ef"/><circle cx="103" cy="90" r="23" fill="#b59a72"/><circle cx="103" cy="90" r="16"/><path d="m103 77 4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1Z" fill="#ead5a8"/><path d="M57 144h96"/></>,
    hogar: <><path d="M57 77h40l5 58H52Z" fill="#c0c9b2"/><path d="M68 77V60h20v17M69 61V50h29v9H83"/><path d="M61 99h32v20H61Z" fill="#f5ede4"/><path d="m125 125 12-70 8 2-12 70" fill="#bfa483"/><path d="m115 122 27 5 4 13h-36Z" fill="#b18aa2"/></>,
    alimentos: <><rect x="49" y="72" width="44" height="62" rx="9" fill="#d2ad75"/><path d="M53 65h36v9H53Z" fill="#aa8998"/><path d="M55 93h32v24H55Z" fill="#f6eee4"/><path d="M116 55h34l9 19v60h-51V74Z" fill="#c4cdb8"/><path d="M108 74h51M120 87h26M121 99h24"/></>,
    congelados: <><path d="M48 65h57l-5 70H54Z" fill="#c7d4d9"/><path d="M48 65h57M56 76h40"/><path d="M76 88v33M62 97l28 16M62 113l28-16" stroke="#fbf8f1"/><path d="M120 79h34l7 56h-49Z" fill="#b6c5a2"/><path d="M126 79V65h22v14"/><circle cx="135" cy="108" r="12" fill="#e5d6a7"/></>,
  };
  return <svg viewBox="0 0 200 168" aria-hidden="true" style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}><ellipse cx="101" cy="143" rx="70" ry="8" fill="#49323f" opacity=".08"/><circle cx="103" cy="83" r="64" fill="#fffaf4" opacity=".65"/><g fill="none" stroke="#634e5a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">{scenes[id] || scenes.hogar}</g></svg>;
}
