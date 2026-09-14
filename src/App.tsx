import { useState } from "react";
import modoLogo from "./imports/logo_modo__1_.png";

const projects = [
  { number: "01", type: "HÁBITOS / BIENESTAR", title: "Rituales que sí caben en tu día.", status: "EN EXPLORACIÓN" },
  { number: "02", type: "CULTURA / CIUDAD", title: "Otra forma de descubrir lo cercano.", status: "EN PROTOTIPO" },
  { number: "03", type: "CREATIVIDAD / IA", title: "Una idea pequeña. Una herramienta enorme.", status: "EN DESARROLLO" },
];

export default function App() {
  const [activeProject, setActiveProject] = useState(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="overflow-x-hidden bg-background text-foreground selection:bg-acid selection:text-black">
      <nav className="fixed inset-x-0 top-0 z-20 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 mix-blend-multiply md:px-10">
        <button aria-label="Ir al inicio" onClick={() => scrollTo("inicio")} className="flex items-center gap-3 text-left">
          <img src={modoLogo} alt="Modo Studio" className="h-10 w-10 rounded-[11px] object-contain" />
          <span className="font-mono text-[10px] font-bold tracking-[0.16em]">MODO<br />STUDIO</span>
        </button>
        <div className="hidden items-center gap-7 font-mono text-[10px] font-bold tracking-[0.12em] md:flex">
          <button onClick={() => scrollTo("manifiesto")} className="transition-opacity hover:opacity-50">(01) ESTUDIO</button>
          <button onClick={() => scrollTo("ideas")} className="transition-opacity hover:opacity-50">(02) IDEAS</button>
          <button onClick={() => scrollTo("contacto")} className="transition-opacity hover:opacity-50">(03) CONTACTO</button>
        </div>
        <button onClick={() => scrollTo("contacto")} className="rounded-full border border-black px-4 py-2 font-mono text-[10px] font-bold tracking-[0.12em] transition-colors hover:bg-black hover:text-white">HABLEMOS ↗</button>
      </nav>

      <section id="inicio" className="relative grid min-h-[860px] grid-cols-1 overflow-hidden border-b border-black pt-32 md:min-h-screen md:grid-cols-12 md:pt-0">
        <div className="absolute right-[-18vw] top-[15%] h-[58vw] w-[58vw] rounded-full bg-acid md:right-[-11vw]" />
        <div className="relative z-10 col-span-12 flex flex-col justify-between px-5 pb-7 md:col-span-8 md:px-10 md:pb-10">
          <div className="mt-14 font-mono text-[10px] font-bold tracking-[0.13em] md:mt-28">EST. 2024 — INTERNET, EN TODAS PARTES</div>
          <div>
            <p className="mb-5 max-w-xs text-sm leading-5 md:mb-8 md:text-base">Creamos aplicaciones que hacen que la vida digital se sienta un poco más humana.</p>
            <h1 className="max-w-5xl font-display text-[clamp(4.5rem,11vw,11rem)] font-medium leading-[0.8] tracking-[-0.075em]">Ideas<br /><span className="pl-[13vw]">en modo</span><br />real.</h1>
          </div>
          <div className="mt-16 flex items-end justify-between border-t border-black pt-4 md:mt-20">
            <span className="max-w-[12rem] font-mono text-[10px] font-bold leading-4 tracking-[0.1em]">PRODUCTOS DIGITALES<br />PARA IOS & ANDROID</span>
            <button onClick={() => scrollTo("manifiesto")} aria-label="Bajar a manifiesto" className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl text-white transition-transform hover:translate-y-1">↓</button>
          </div>
        </div>
        <div className="relative z-10 col-span-4 hidden border-l border-black md:block">
          <div className="absolute bottom-10 left-7 max-w-[12rem] font-display text-3xl leading-[0.94] tracking-[-0.04em]">Hacemos nuestras propias preguntas.</div>
          <div className="absolute right-7 top-28 font-mono text-[10px] font-bold [writing-mode:vertical-rl]">SCROLL PARA ENTRAR ———</div>
        </div>
      </section>

      <section id="manifiesto" className="grid border-b border-black md:grid-cols-12">
        <div className="border-b border-black p-5 md:col-span-4 md:border-b-0 md:border-r md:p-10">
          <span className="font-mono text-[10px] font-bold tracking-[0.13em]">(01) NO SOMOS AGENCIA</span>
        </div>
        <div className="p-5 md:col-span-8 md:p-10 lg:p-16">
          <p className="max-w-4xl font-display text-[clamp(2.45rem,5.5vw,5.6rem)] leading-[0.93] tracking-[-0.055em]">No hacemos apps para terceros. Creamos productos propios, desde la primera obsesión hasta el último píxel.</p>
          <div className="mt-14 grid gap-8 border-t border-black pt-5 sm:grid-cols-3">
            <p className="text-sm leading-5"><span className="font-mono text-[10px] font-bold">PENSAR</span><br /><br />Encontramos tensiones cotidianas que merecen una idea mejor.</p>
            <p className="text-sm leading-5"><span className="font-mono text-[10px] font-bold">HACER</span><br /><br />Diseñamos, construimos y probamos con atención casi obsesiva.</p>
            <p className="text-sm leading-5"><span className="font-mono text-[10px] font-bold">LANZAR</span><br /><br />Ponemos productos en manos de personas y seguimos escuchando.</p>
          </div>
        </div>
      </section>

      <section id="ideas" className="border-b border-black">
        <div className="flex items-center justify-between p-5 md:p-10">
          <span className="font-mono text-[10px] font-bold tracking-[0.13em]">(02) EN EL TALLER</span>
          <span className="font-mono text-[10px] font-bold tracking-[0.13em]">03 IDEAS VIVAS</span>
        </div>
        <div className="grid md:grid-cols-3">
          {projects.map((project, index) => (
            <button key={project.number} onClick={() => setActiveProject(index)} className={`group min-h-72 border-t border-black p-5 text-left transition-colors md:min-h-[420px] md:border-r md:p-8 last:md:border-r-0 ${activeProject === index ? "bg-black text-white" : "hover:bg-acid"}`}>
              <div className="flex justify-between font-mono text-[10px] font-bold tracking-[0.1em]"><span>{project.number}</span><span className={activeProject === index ? "text-acid" : ""}>{project.status}</span></div>
              <div className="mt-24 md:mt-44"><p className="mb-3 font-mono text-[10px] font-bold tracking-[0.1em]">{project.type}</p><h3 className="max-w-xs font-display text-4xl leading-[0.92] tracking-[-0.05em]">{project.title}</h3></div>
              <div className="mt-6 text-xl">↗</div>
            </button>
          ))}
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-black px-5 py-20 text-white md:px-10 md:py-28">
        <div className="absolute bottom-[-28vw] left-[-8vw] h-[52vw] w-[52vw] rounded-full bg-acid" />
        <div className="relative grid max-w-[1240px] gap-16 md:grid-cols-12 md:gap-8">
          <span className="font-mono text-[10px] font-bold tracking-[0.13em] md:col-span-3">(03) CONVERSEMOS</span>
          <div className="md:col-span-9">
            <h2 className="max-w-4xl font-display text-[clamp(3.4rem,7.5vw,8rem)] leading-[0.84] tracking-[-0.065em]">¿Tienes una mente inquieta?<br /><span className="text-acid">Nos caes bien.</span></h2>
            <a href="mailto:hola@modostudio.co" className="mt-12 inline-flex items-center gap-8 border-b border-white pb-3 font-mono text-xs font-bold tracking-[0.12em] transition-colors hover:border-acid hover:text-acid">HOLA@MODOSTUDIO.CO <span className="text-2xl">↗</span></a>
          </div>
        </div>
        <footer className="relative mt-28 flex flex-col justify-between gap-5 border-t border-white/30 pt-4 font-mono text-[10px] font-bold tracking-[0.1em] md:mt-36 md:flex-row">
          <span>© 2024 MODO STUDIO</span><span>HECHO CON CURIOSIDAD EN INTERNET</span><a href="https://modostudio.co" className="hover:text-acid">MODOSTUDIO.CO ↗</a>
        </footer>
      </section>
    </main>
  );
}
