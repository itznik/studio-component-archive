"use client";

import { useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Pointer = { x: MotionValue<number>; y: MotionValue<number> };

const enter = { type: "spring", stiffness: 90, damping: 20, mass: 1 } as const;
const follow = { stiffness: 60, damping: 20, mass: 0.9 };

/* ───────── Floating wrapper: pointer + scroll parallax, spring entrance, idle drift ───────── */
function Float({
  className = "",
  depth,
  rotate = 0,
  delay = 0,
  pointer,
  children,
}: {
  className?: string;
  depth: number;
  rotate?: number;
  delay?: number;
  pointer: Pointer;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const x = useTransform(pointer.x, (v) => (reduce ? 0 : v * depth * 80));
  const y = useTransform([pointer.y, scrollY], ([p, s]: number[]) =>
    reduce ? 0 : p * depth * 80 + s * depth * 0.45
  );

  return (
    <motion.div
      style={{ x, y }}
      className={`pointer-events-none absolute ${className}`}
    >
      <motion.div
        style={{ rotate }}
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ...enter, delay: 0.4 + delay }}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{
            duration: 6 + delay * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ───────── Canvas pieces ───────── */
const Dots = () => (
  <div className="flex gap-1 border-b border-[var(--line)] px-3 py-2">
    {[0, 1, 2].map((i) => (
      <span key={i} className="h-2 w-2 rounded-full border border-[var(--bd)]" />
    ))}
  </div>
);

function WireCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--bd)] bg-white/80 shadow-[var(--shadow)]">
      <Dots />
      <div className="grid grid-cols-[1fr_1.5fr] gap-2 p-3">
        <div className="space-y-2">
          <span className="block h-6 w-6 rounded-full bg-black/10" />
          <span className="block h-1.5 w-full rounded bg-black/10" />
          <span className="block h-1.5 w-2/3 rounded bg-black/10" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <span className="col-span-2 h-8 rounded bg-black/[0.06]" />
          <span className="h-10 rounded bg-black/[0.06]" />
          <span className="h-10 rounded bg-[var(--blue)]" />
        </div>
      </div>
    </div>
  );
}

function ChartCard() {
  return (
    <div className="rounded-2xl border border-[var(--bd)] bg-white p-3 shadow-[var(--shadow)]">
      <p className="t-mono flex justify-between text-[var(--mute)]">
        <span>Installs</span>
        <span className="text-[var(--ink)]">4.5K</span>
      </p>
      <svg viewBox="0 0 160 70" fill="none" className="mt-2 w-full" aria-hidden>
        <path d="M0 62H160M0 38H160M0 14H160" stroke="var(--line)" />
        <path
          d="M2 60L20 56 34 58 50 48 66 50 84 40 100 44 118 32 136 34 158 24"
          stroke="#9a9a94"
          strokeWidth="1.2"
        />
        <motion.path
          d="M2 58L16 50 28 54 42 36 54 42 68 24 82 32 96 18 110 26 124 10 138 20 158 6"
          stroke="var(--blue)"
          strokeWidth="1.8"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  );
}

function ImageFrame() {
  return (
    <div className="rounded-[22px] border border-[var(--bd)] bg-white p-1.5 shadow-[var(--shadow)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0a0a0a]">
        <div
          className="absolute inset-0 blur-[10px]"
          style={{
            background:
              "radial-gradient(46% 34% at 54% 34%, #fff 0%, #bcd2ff 38%, transparent 72%), radial-gradient(70% 46% at 40% 94%, #002fa7 0%, transparent 70%)",
          }}
        />
        <span className="t-mono absolute bottom-2 left-2.5 text-white/70">
          bento-hero
        </span>
      </div>
    </div>
  );
}

function PhoneCard() {
  return (
    <div className="rounded-[26px] border border-[var(--bd)] bg-white p-2 shadow-[var(--shadow)]">
      <div className="aspect-[9/16] space-y-2 rounded-[18px] bg-[var(--bg)] p-2.5">
        <span className="mx-auto block h-1.5 w-8 rounded-full bg-black/15" />
        <span className="block h-14 rounded-lg bg-black/[0.06]" />
        <span className="block h-1.5 w-full rounded bg-black/10" />
        <span className="block h-1.5 w-3/4 rounded bg-black/10" />
        <span className="block h-6 rounded-full bg-[var(--blue)]" />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--ink)]">
      <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden>
        <circle cx="3" cy="3" r="1.6" fill="#fff" />
        <rect x="6" y="6.5" width="8" height="2" rx="1" fill="#fff" />
      </svg>
    </span>
  );
}

function Bubble({ when, text }: { when: string; text: string }) {
  return (
    <div className="flex max-w-[250px] items-start gap-3 rounded-[28px] border border-[var(--line)] bg-white/90 py-3 pl-3 pr-5 shadow-[var(--shadow)] backdrop-blur-sm">
      <Avatar />
      <div>
        <p className="flex items-baseline gap-2 text-sm">
          <b className="font-semibold">Online</b>
          <span className="t-mono text-[10px] text-[var(--mute)]">{when}</span>
        </p>
        <p className="mt-0.5 text-[15px] leading-snug tracking-[-0.01em]">
          {text}
        </p>
      </div>
    </div>
  );
}

function Cursor({
  color,
  label,
  dark = false,
}: {
  color: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="relative">
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden style={{ color }}>
        <path
          d="M3 2l15 8-6.5 2L8.5 19z"
          fill="currentColor"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="absolute left-4 top-5 whitespace-nowrap rounded-md px-2 py-0.5 text-[13px] font-medium"
        style={{ background: color, color: dark ? "#0a0a0a" : "#fff" }}
      >
        {label}
      </span>
    </div>
  );
}

function Tool({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[var(--line)] bg-white shadow-[var(--shadow)] md:h-16 md:w-16">
      {children}
    </div>
  );
}

const FigmaIcon = () => (
  <svg viewBox="0 0 24 36" className="h-7" aria-label="Figma" role="img">
    <path d="M6 0h6v12H6a6 6 0 010-12z" fill="#f24e1e" />
    <path d="M12 0h6a6 6 0 010 12h-6z" fill="#ff7262" />
    <path d="M6 12h6v12H6a6 6 0 010-12z" fill="#a259ff" />
    <circle cx="18" cy="18" r="6" fill="#1abcfe" />
    <path d="M6 36a6 6 0 006-6v-6H6a6 6 0 000 12z" fill="#0acf83" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7" aria-label="VS Code" role="img">
    <path d="M17.5 2.5l4.5 2.2v14.6l-4.5 2.2L8 13.5l-4 3-1.5-.8V8.3L4 7.5l4 3z" fill="#1f8ad2" />
    <path d="M17.5 7.5v9L12 12z" fill="#fff" />
  </svg>
);

const NotionIcon = () => (
  <span
    aria-label="Notion"
    role="img"
    className="grid h-7 w-7 place-items-center rounded-md border-2 border-[var(--ink)] font-serif text-[17px] font-bold leading-none"
  >
    N
  </span>
);

const WpIcon = () => (
  <span
    aria-label="WordPress"
    role="img"
    className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#3a3a3a] font-serif text-[15px] font-bold leading-none"
  >
    W
  </span>
);

function AiToggle({ on, setOn }: { on: boolean; setOn: (v: boolean) => void }) {
  return (
    <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-[var(--line)] bg-white/90 py-2.5 pl-6 pr-3 shadow-[var(--shadow)] backdrop-blur-sm">
      <span id="ai-mode-label" className="text-lg tracking-[-0.02em]">
        AI Mode
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-labelledby="ai-mode-label"
        onClick={() => setOn(!on)}
        className={`flex h-9 w-16 items-center rounded-full p-1 transition-colors duration-200 ${
          on ? "justify-end bg-[var(--blue)]" : "justify-start bg-black/15"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 34 }}
          className="h-7 w-7 rounded-full bg-white shadow"
        />
      </button>
    </div>
  );
}

/* ───────── Hero ───────── */
const LINES = ["Components", "that love", "the web."];
const HANDLES = ["-left-[5px] -top-[5px]", "-right-[5px] -top-[5px]", "-bottom-[5px] -left-[5px]", "-bottom-[5px] -right-[5px]"];

export default function HeroWorkspace() {
  const [ai, setAi] = useState(true);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const pointer: Pointer = { x: useSpring(px, follow), y: useSpring(py, follow) };

  return (
    <section
      id="index"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width - 0.5);
        py.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
      className="relative flex min-h-[920px] items-center justify-center overflow-hidden px-5 pb-24 pt-32 md:min-h-[100svh]"
    >
      {/* Canvas background items */}
      <Float pointer={pointer} depth={0.35} rotate={-6} className="left-[-9%] top-[11%] w-[clamp(150px,48%,300px)] md:left-[2%] md:top-[15%]"><WireCard /></Float>
      <Float pointer={pointer} depth={0.5} rotate={5} delay={0.1} className="right-[-7%] top-[12%] w-[clamp(150px,44%,300px)] md:right-[2%] md:top-[13%]"><ChartCard /></Float>
      <Float pointer={pointer} depth={0.6} rotate={-5} delay={0.2} className="bottom-[8%] left-[-7%] w-[clamp(120px,38%,230px)] md:bottom-[10%] md:left-[4%]"><ImageFrame /></Float>
      <Float pointer={pointer} depth={0.45} rotate={6} delay={0.25} className="bottom-[6%] right-[-5%] w-[clamp(96px,30%,170px)] md:bottom-[9%] md:right-[5%]"><PhoneCard /></Float>

      <Float pointer={pointer} depth={0.7} delay={0.15} className="left-[20%] top-[22%] md:left-[27%] md:top-[10%]"><AiToggle on={ai} setOn={setAi} /></Float>
      <Float pointer={pointer} depth={0.8} delay={0.3} className="hidden left-[4%] top-[34%] sm:block md:left-[3%] md:top-[50%]"><Bubble when="yesterday" text="Let’s try a wider grid." /></Float>
      <Float pointer={pointer} depth={0.8} delay={0.35} className="bottom-[25%] left-[7%] md:bottom-[38%] md:left-auto md:right-[4%]"><Bubble when="right now" text="Built to order, not off the shelf." /></Float>

      <Float pointer={pointer} depth={1} delay={0.1} className="right-[9%] top-[29%] md:right-[22%] md:top-[18%]"><Tool><FigmaIcon /></Tool></Float>
      <Float pointer={pointer} depth={0.9} delay={0.2} className="left-[4%] top-[20%] md:left-[18%] md:top-[30%]"><Tool><CodeIcon /></Tool></Float>
      <Float pointer={pointer} depth={0.9} delay={0.3} className="bottom-[26%] right-[8%] md:bottom-[22%] md:right-[20%]"><Tool><NotionIcon /></Tool></Float>
      <Float pointer={pointer} depth={1} delay={0.4} className="bottom-[4%] left-[38%] md:bottom-[8%] md:left-[30%]"><Tool><WpIcon /></Tool></Float>

      <Float pointer={pointer} depth={1.1} delay={0.2} className="left-[42%] top-[10%] md:left-[22%] md:top-[12%]"><Cursor color="#d63ad0" label="UX Designer" /></Float>
      <Float pointer={pointer} depth={1.1} delay={0.3} className="left-[17%] top-[26%] md:left-[16%] md:top-[40%]"><Cursor color="#f7b500" label="Developer" dark /></Float>

      {/* Headline / Center Object */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <p className="t-mono flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-3 py-1.5 text-[var(--mute)] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />
          248 components
          <span className="text-[var(--bd)]">//</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={ai ? "ai" : "hand"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="text-[var(--ink)]"
            >
              {ai ? "AI search on" : "Browse by hand"}
            </motion.span>
          </AnimatePresence>
        </p>

        <div className="relative mt-9">
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...enter, delay: 0.7 }}
            className="pointer-events-none absolute -inset-3 border border-dashed border-[#a8a8a1]"
          >
            {HANDLES.map((h) => (
              <span key={h} className={`absolute h-2.5 w-2.5 border border-[#a8a8a1] bg-white ${h}`} />
            ))}
            <span className="t-mono absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-[var(--blue)] px-2 py-0.5 text-white">
              Hug × Hug
            </span>
          </motion.span>

          <h1 className="text-[clamp(3rem,14vw,9.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em]">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ ...enter, stiffness: 110, delay: 0.1 + i * 0.09 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="absolute -bottom-6 right-[-14px]">
            <Cursor color="#f2522e" label="Customer" />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...enter, delay: 0.75 }}
          className="mt-16 max-w-md text-lg leading-snug tracking-[-0.01em] text-[var(--mute)] md:text-xl"
        >
          Hand-built interface components. Preview each one live,{" "}
          <span className="t-serif text-[var(--ink)]">copy the code</span>, and ship it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...enter, delay: 0.85 }}
          className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
        >
          <a
            href="#catalog"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blue)] px-7 py-4 text-lg font-medium text-white transition-transform duration-200 active:scale-[0.98]"
          >
            Browse the vault
            <ArrowUpRight
              aria-hidden
              className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#submit"
            className="inline-flex items-center justify-center rounded-full border border-[var(--ink)] px-7 py-4 text-lg font-medium transition-colors duration-150 hover:bg-[var(--ink)] hover:text-white"
          >
            Submit yours
          </a>
        </motion.div>
      </div>
    </section>
  );
}
