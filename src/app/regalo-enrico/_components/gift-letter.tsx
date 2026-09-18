"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { script, serif } from "./fonts";
import styles from "./gift.module.css";
import { GraduationCap } from "./graduation-cap";
import { RaceEasterEgg } from "./race-easter-egg";

// ---------------------------------------------------------------------------
// The letter.
// ---------------------------------------------------------------------------
const LETTER = {
  greeting: "Egregio Dott.\u00A0Vettori,",
  paragraphs: [
    "La contatto per porgerLe le mie più sincere congratulazioni per il conseguimento di questo suo primo (e del tutto occasionale) titolo di studio.",
    "Battute a parte: tra un allenamento e l’altro, qualche tiro al tabellone e persino qualche canestro, sei riuscito ad incastrare anche i libri e a raggiungere un traguardo davvero importante. So che stai già pensando alla prossima sfida.",
    "Ora però, visto che hai spinto al massimo sui libri, tieniti libero un weekend, perché direi che ti tocca spingere al massimo anche in pista: preparati, perché il prossimo traguardo ce lo andiamo a prendere insieme a bordo di una Ferrari!",
    "Fiero di te, Dottore!"
  ],
  signOff: "Il tuo (vero) amore,",
  signature: "Jack",
  postscript: "P.S. Angy spostati"
};

type Phase = "closed" | "opening" | "letter" | "reading";

// Deterministic PRNG so server and client render the same sky.
function seeded(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function Sky() {
  const { stars, motes } = useMemo(() => {
    const rand = seeded(42);
    const stars = Array.from({ length: 90 }, () => ({
      top: rand() * 100,
      left: rand() * 100,
      size: rand() * 2 + 0.6,
      dur: 2 + rand() * 4,
      delay: rand() * -6
    }));
    const motes = Array.from({ length: 22 }, () => ({
      left: rand() * 100,
      size: 4 + rand() * 8,
      dur: 12 + rand() * 14,
      delay: rand() * -26,
      drift: (rand() - 0.5) * 120
    }));
    return { stars, motes };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={`s${i}`}
          className={styles.star}
          style={
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              "--dur": `${s.dur}s`,
              "--delay": `${s.delay}s`
            } as React.CSSProperties
          }
        />
      ))}
      {motes.map((m, i) => (
        <span
          key={`m${i}`}
          className={styles.mote}
          style={
            {
              left: `${m.left}%`,
              width: m.size,
              height: m.size,
              "--dur": `${m.dur}s`,
              "--delay": `${m.delay}s`,
              "--drift": `${m.drift}px`
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

function SparkleBurst() {
  const particles = useMemo(() => {
    const rand = seeded(7);
    return Array.from({ length: 32 }, (_, i) => {
      const angle = (i / 32) * Math.PI * 2 + rand() * 0.3;
      const dist = 70 + rand() * 130;
      return {
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        size: 3 + rand() * 5,
        delay: rand() * 0.15,
        star: i % 4 === 0
      };
    });
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute left-1/2 top-[58%] z-50">
      {particles.map((p, i) =>
        p.star ? (
          <motion.span
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-amber-200"
            style={{ fontSize: p.size * 3 }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.2, rotate: 0 }}
            animate={{ x: p.x, y: p.y, opacity: 0, scale: 1, rotate: 180 }}
            transition={{ duration: 1.4, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
          >
            ✦
          </motion.span>
        ) : (
          <motion.span
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100"
            style={{ width: p.size, height: p.size, boxShadow: "0 0 10px 3px rgba(255,215,130,.8)" }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: p.x, y: p.y, opacity: 0, scale: 0.3 }}
            transition={{ duration: 1.2, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
          />
        )
      )}
    </div>
  );
}

function Envelope({ phase, onOpen }: { phase: Phase; onOpen: () => void }) {
  const reduce = useReducedMotion();
  const opened = phase !== "closed";
  const letterOut = phase === "letter" || phase === "reading";

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-disabled={opened}
      aria-label="Apri la busta"
      className={`relative block rounded-md outline-none [-webkit-tap-highlight-color:transparent] focus-visible:ring-2 focus-visible:ring-amber-200/70 ${
        opened ? "cursor-default" : "cursor-pointer"
      }`}
      style={{ width: "min(360px, 84vw)", aspectRatio: "3 / 2", perspective: 1200 }}
      animate={opened || reduce ? { y: 0 } : { y: [0, -10, 0] }}
      transition={opened ? { duration: 0.4 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={opened ? undefined : { scale: 1.03 }}
      whileTap={opened ? undefined : { scale: 0.98 }}
    >
      {/* halo */}
      <motion.div
        aria-hidden
        className="absolute -inset-16 -z-10 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,210,130,.35), transparent 65%)" }}
        animate={{ opacity: opened ? 0.9 : [0.4, 0.7, 0.4], scale: opened ? 1.3 : 1 }}
        transition={opened ? { duration: 1 } : { duration: 4, repeat: Infinity }}
      />

      {/* back of the envelope */}
      <div
        className="absolute inset-0 rounded-md shadow-[0_30px_60px_-15px_rgba(0,0,0,.7)]"
        style={{ background: "linear-gradient(160deg, #d8bf95, #c4a676)" }}
      />

      {/* letter inside */}
      <motion.div
        className={`${styles.paper} absolute inset-x-[6%] top-[5%] z-10 h-[90%] rounded-sm shadow-md`}
        initial={false}
        animate={{ y: letterOut ? "-58%" : "0%" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`${script.className} pt-[8%] text-center text-2xl text-[#7a5a2e]`}>
          {LETTER.greeting}
        </div>
        <div className="mx-auto mt-3 w-3/4 space-y-2 opacity-40">
          <div className="h-[3px] rounded bg-[#a88a5c]" />
          <div className="h-[3px] w-5/6 rounded bg-[#a88a5c]" />
          <div className="h-[3px] w-2/3 rounded bg-[#a88a5c]" />
        </div>
      </motion.div>

      {/* front pocket */}
      <div className="absolute inset-0 z-20 overflow-hidden rounded-md">
        <div
          className="absolute inset-0"
          style={{ background: "#e6d0a8", clipPath: "polygon(0 0, 52% 56%, 0 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "#e2cba1", clipPath: "polygon(100% 0, 48% 56%, 100% 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(0deg, #ead7b3, #e4cda4)",
            clipPath: "polygon(0 100%, 50% 48%, 100% 100%)"
          }}
        />
      </div>

      {/* flap */}
      <motion.div
        className="absolute inset-x-0 top-0 h-full"
        style={{ transformOrigin: "top center", zIndex: letterOut ? 5 : 30 }}
        initial={false}
        animate={{ rotateX: opened ? 180 : 0 }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      >
        <div
          className="absolute inset-0 rounded-t-md"
          style={{
            background: "linear-gradient(180deg, #efdcb8, #dcc195)",
            clipPath: "polygon(0 0, 100% 0, 50% 60%)",
            filter: "drop-shadow(0 4px 4px rgba(0,0,0,.25))"
          }}
        />
      </motion.div>

      {/* wax seal */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            className="absolute left-1/2 top-[58%] z-40 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
            style={{
              background: "radial-gradient(circle at 35% 30%, #d8434a, #8e1620 70%)",
              boxShadow: "inset 0 -3px 6px rgba(0,0,0,.35), inset 0 2px 4px rgba(255,255,255,.25), 0 3px 8px rgba(0,0,0,.4)"
            }}
            exit={{ scale: 1.6, opacity: 0, rotate: 25 }}
            transition={{ duration: 0.45 }}
          >
            <span className={`${script.className} text-3xl leading-none text-[#f7c7c0]/90`}>E</span>
          </motion.div>
        )}
      </AnimatePresence>

      {opened && !reduce && <SparkleBurst />}
    </motion.button>
  );
}

function Note({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    ref.current?.focus({ preventScroll: true });
  }, []);

  const line = {
    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      key="note"
      ref={ref}
      tabIndex={-1}
      className="relative z-10 my-auto w-full max-w-xl px-4 outline-none"
      initial={{ opacity: 0, y: 80, scale: 0.85, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, y: 40, scale: 0.9 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,210,130,.28), transparent 70%)" }}
      />
      <motion.article
        className={`${styles.paper} ${serif.className} relative rounded-md px-7 py-10 text-[#4a3a26] shadow-[0_40px_80px_-20px_rgba(0,0,0,.8)] sm:px-12 sm:py-14`}
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.35, delayChildren: 0.6 } } }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-3 rounded border border-[#c9a96b]/40" />

        <GraduationCap className="mx-auto -mt-2 mb-4 block w-24 drop-shadow-[0_6px_8px_rgba(60,40,10,.25)] sm:w-28" />

        <motion.h1 variants={line} className={`${script.className} text-[2.6rem] leading-tight text-[#7a5a2e] sm:text-[3.25rem]`}>
          {LETTER.greeting}
        </motion.h1>

        <div className="mt-6 space-y-5 text-xl leading-relaxed sm:text-[1.35rem]">
          {LETTER.paragraphs.map((p, i) => (
            <motion.p key={i} variants={line}>
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div variants={line} className="mt-10 text-right">
          <p className="text-xl italic">{LETTER.signOff}</p>
          <p className={`${script.className} mt-1 text-5xl text-[#7a5a2e]`}>{LETTER.signature}</p>
        </motion.div>

        <motion.p variants={line} className="mt-8 text-lg italic text-[#6b5638]">
          {LETTER.postscript}
        </motion.p>

        <motion.div variants={line} aria-hidden className="mt-8 text-center text-lg tracking-[0.6em] text-[#c9a96b]">
          ✦ ✦ ✦
        </motion.div>
      </motion.article>

      <motion.button
        type="button"
        onClick={onClose}
        className={`${serif.className} mx-auto mt-6 block [-webkit-tap-highlight-color:transparent] text-lg italic text-amber-100/60 transition hover:text-amber-100`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        richiudi la busta
      </motion.button>
    </motion.div>
  );
}

export function GiftLetter() {
  const [phase, setPhase] = useState<Phase>("closed");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const open = () => {
    if (phase !== "closed") return;
    setPhase("opening");
    timers.current = [
      setTimeout(() => setPhase("letter"), 850),
      setTimeout(() => setPhase("reading"), 2300)
    ];
  };

  return (
    <main
      className={`${styles.sky} relative flex min-h-screen min-h-[100svh] flex-col items-center overflow-hidden pb-12 pt-24 sm:py-12`}
    >
      <Sky />
      <RaceEasterEgg />

      <AnimatePresence mode="wait">
        {phase !== "reading" ? (
          <motion.div
            key="envelope"
            className="relative z-10 my-auto flex flex-col items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className={`${script.className} ${styles.shimmer} mb-16 px-6 py-2 text-6xl sm:text-7xl`}
              animate={{ opacity: phase === "closed" ? 1 : 0 }}
            >
              Per Enri
            </motion.h1>

            <Envelope phase={phase} onOpen={open} />

            <motion.p
              className={`${serif.className} mt-14 text-lg italic tracking-wide text-amber-100/70`}
              animate={phase === "closed" ? { opacity: [0.35, 1, 0.35] } : { opacity: 0 }}
              transition={phase === "closed" ? { duration: 2.8, repeat: Infinity } : { duration: 0.4 }}
            >
              tocca la busta per aprirla
            </motion.p>
          </motion.div>
        ) : (
          <Note onClose={() => setPhase("closed")} />
        )}
      </AnimatePresence>
    </main>
  );
}
