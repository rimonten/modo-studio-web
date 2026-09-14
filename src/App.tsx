import { useState } from "react";
import modoStudioLogo from "./imports/image-1.png";

const ideas = [
  { id: "01", name: "Todavía sin nombre", category: "Bienestar", description: "Una rutina amable para volver a lo que te hace bien.", progress: "Investigando" },
  { id: "02", name: "Muy pronto", category: "Cultura", description: "Una nueva manera de encontrar planes que sí te mueven.", progress: "Prototipando" },
  { id: "03", name: "En construcción", category: "Creatividad", description: "Una herramienta ligera para hacer espacio a las ideas.", progress: "Construyendo" },
];

function Arrow() {
  return <span aria-hidden="true" className="text-xl leading-none">↗</span>;
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const idea = ideas[selected];
  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-lilac">
      <header className="relative z-30 mx-auto flex max-w-[1540px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-7">
        <button onClick={() => go("inicio")} aria-label="Volver al inicio" className="rounded-md outline-offset-4 focus-visible:outline-2 focus-visible:outline-black">
          <img src={modoStudioLogo} alt="Modo Studio" className="h-11 w-auto object-contain" />
        </button>
        <div className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          <button onClick={() => go("estudio")} className="transition-opacity hover:opacity-45">Estudio</button>
          <button onClick={() => go("ideas")} className="transition-opacity hover:opacity-45">Ideas</button>
          <a href="mailto:hola@modostudio.co" className="flex items-center gap-1.5 rounded-full bg-black px-4 py-2.5 text-white transition-transform hover:-translate-y-0.5"><span>Hablemos</span><Arrow /></a>
        </div>
        <button onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white lg:hidden">
          <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
        </button>
      </header>

      {open && <div className="fixed inset-0 z-20 flex flex-col justify-end bg-lilac px-5 pb-10 pt-24 sm:px-8 lg:hidden">
        <button onClick={() => go("estudio")} className="border-t border-black py-5 text-left text-4xl font-bold tracking-[-0.06em]">Estudio</button>
        <button onClick={() => go("ideas")} className="border-t border-black py-5 text-left text-4xl font-bold tracking-[-0.06em]">Ideas</button>
        <a onClick={() => setOpen(false)} href="mailto:hola@modostudio.co" className="flex items-center justify-between border-y border-black py-5 text-4xl font-bold tracking-[-0.06em]">Hablemos <Arrow /></a>
      </div>}

      <section id="inicio" className="mx-auto grid max-w-[1540px] px-5 pb-8 pt-14 sm:px-8 md:pb-12 lg:grid-cols-12 lg:px-12 lg:pt-24">
        <div className="lg:col-span-9">
          <p className="mb-7 max-w-xs text-sm leading-5 text-ink-muted">Somos Modo Studio. Creamos y lanzamos nuestras propias apps para iOS y Android.</p>
          <h1 className="max-w-6xl text-[clamp(4.25rem,10vw,10.7rem)] font-extrabold leading-[0.84] tracking-[-0.09em]">Hacemos apps<br />que dan ganas<br />de usar.</h1>
        </div>
        <div className="mt-12 flex flex-col justify-end lg:col-span-3 lg:mt-0 lg:pb-4">
          <p className="max-w-[16rem] text-base leading-6">No construimos para otros. Elegimos nuestras ideas, las hacemos reales y las cuidamos después.</p>
          <button onClick={() => go("ideas")} className="mt-7 flex w-fit items-center gap-3 rounded-full border border-black px-4 py-2.5 text-sm font-bold transition-colors hover:bg-black hover:text-white">Ver lo que estamos creando <span>↓</span></button>
        </div>
      </section>

      <section className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
        <div className="relative min-h-[310px] overflow-hidden rounded-[2rem] bg-lilac md:min-h-[400px] lg:min-h-[480px]">
          <div className="absolute left-[57%] top-[10%] h-[15rem] w-[15rem] rounded-[3.5rem] bg-black sm:left-[50%] sm:h-[22rem] sm:w-[22rem] lg:h-[29rem] lg:w-[29rem]" />
          <div className="absolute left-[calc(57%+2.4rem)] top-[calc(10%+2.4rem)] h-[10rem] w-[10rem] rounded-[2.1rem] border-[1.5rem] border-lilac sm:left-[calc(50%+3.5rem)] sm:h-[15rem] sm:w-[15rem] sm:border-[2rem] lg:h-[20rem] lg:w-[20rem]" />
          <div className="absolute bottom-[11%] right-[9%] h-[7rem] w-[7rem] rounded-full bg-[#ff5d3d] sm:h-[10rem] sm:w-[10rem] lg:h-[13rem] lg:w-[13rem]" />
          <p className="absolute bottom-6 left-6 max-w-[14rem] text-sm font-bold leading-5 sm:bottom-9 sm:left-9">Tecnología útil,<br />detalle humano.</p>
          <span className="absolute right-6 top-6 font-mono text-[10px] font-medium tracking-[0.14em] sm:right-9 sm:top-9">MODO / 01</span>
        </div>
      </section>

      <section id="estudio" className="mx-auto grid max-w-[1540px] gap-10 px-5 py-28 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-40">
        <p className="font-mono text-[10px] font-medium tracking-[0.14em] lg:col-span-3">01 — EL ESTUDIO</p>
        <div className="lg:col-span-9">
          <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.75rem)] font-bold leading-[0.94] tracking-[-0.075em]">Una pequeña compañía de producto con una regla simple: hacer menos, pero hacerlo muy bien.</h2>
          <div className="mt-16 grid gap-10 border-t border-black/15 pt-6 sm:grid-cols-3">
            <div><span className="font-mono text-[10px] tracking-[0.14em] text-ink-muted">01 / ELEGIMOS</span><p className="mt-3 text-sm leading-5">Ideas que resuelven fricciones reales, por pequeñas que parezcan.</p></div>
            <div><span className="font-mono text-[10px] tracking-[0.14em] text-ink-muted">02 / DISEÑAMOS</span><p className="mt-3 text-sm leading-5">Experiencias claras y agradables desde el primer toque.</p></div>
            <div><span className="font-mono text-[10px] tracking-[0.14em] text-ink-muted">03 / EVOLUCIONAMOS</span><p className="mt-3 text-sm leading-5">Escuchamos, medimos y mejoramos una versión a la vez.</p></div>
          </div>
        </div>
      </section>

      <section id="ideas" className="bg-black py-24 text-white sm:py-32">
        <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between"><div><p className="font-mono text-[10px] font-medium tracking-[0.14em] text-lilac">02 — NUESTRAS IDEAS</p><h2 className="mt-4 text-[clamp(2.7rem,5.5vw,6.2rem)] font-bold leading-[0.88] tracking-[-0.08em]">En movimiento.</h2></div><span className="hidden text-sm text-white/60 sm:block">Pulsa una idea para explorarla</span></div>
          <div className="mt-16 grid border-t border-white/25 lg:grid-cols-12">
            <div className="border-b border-white/25 lg:col-span-7 lg:border-b-0 lg:border-r">
              {ideas.map((item, index) => <button key={item.id} onClick={() => setSelected(index)} className={`flex w-full items-center justify-between border-b border-white/25 py-5 text-left transition-colors last:border-b-0 ${selected === index ? "text-lilac" : "text-white hover:text-lilac"}`}>
                <span className="font-mono text-[10px]">{item.id}</span><span className="ml-6 flex-1 text-2xl font-semibold tracking-[-0.055em] sm:text-3xl">{item.name}</span><span className="ml-3 text-lg">{selected === index ? "↓" : "↘"}</span>
              </button>)}
            </div>
            <div className="flex min-h-[260px] flex-col justify-between bg-white px-6 py-7 text-black sm:px-9 sm:py-9 lg:col-span-5">
              <div><span className="font-mono text-[10px] font-medium tracking-[0.14em] text-ink-muted">{idea.progress.toUpperCase()} — {idea.category.toUpperCase()}</span><p className="mt-8 max-w-sm text-3xl font-bold leading-[1.02] tracking-[-0.07em]">{idea.description}</p></div>
              <a href="mailto:hola@modostudio.co?subject=Quiero%20seguir%20a%20Modo" className="mt-8 flex items-center justify-between border-t border-black/15 pt-4 text-sm font-bold">Quiero enterarme del lanzamiento <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1540px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="max-w-4xl"><p className="font-mono text-[10px] font-medium tracking-[0.14em] text-ink-muted">03 — ESTAMOS ABIERTOS</p><h2 className="mt-5 text-[clamp(3rem,7vw,7.5rem)] font-bold leading-[0.86] tracking-[-0.09em]">Si te interesa<br />lo que hacemos,<br /><a href="mailto:hola@modostudio.co" className="underline decoration-lilac decoration-[0.16em] underline-offset-[0.12em] transition-colors hover:text-[#747474]">escríbenos.</a></h2></div>
      </section>

      <footer className="border-t border-black/15 px-5 py-6 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1540px] flex-col justify-between gap-4 text-[10px] font-medium tracking-[0.12em] text-ink-muted sm:flex-row"><span>© 2026 MODO STUDIO</span><a className="hover:text-black" href="https://modostudio.co">MODOSTUDIO.CO ↗</a><span>HECHO PARA LA VIDA REAL</span></div></footer>
    </main>
  );
}
