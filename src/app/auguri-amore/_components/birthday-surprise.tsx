"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./birthday-surprise.module.css";

type Phase = "closed" | "reading" | "photos";

const BIRTHDAY_MESSAGE =
  "Tanti auguri amore mio, so che sei triste perche sei da sola, pero' spero ti arrivi la cosa che ti fa sorridere un pochino. Nel frattempo, ecco un po' di G.....";

const DOG_PHOTOS = [
  {
    src: "/golden-retriever.jpg",
    alt: "Un golden retriever con un dolcissimo musetto",
    note: "un musetto da baci"
  },
  {
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85",
    alt: "Un golden retriever felice all'aria aperta",
    note: "sorriso contagioso"
  },
  {
    src: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?auto=format&fit=crop&w=1000&q=85",
    alt: "Un cucciolo di golden retriever seduto sull'erba",
    note: "piccolo batuffolo"
  },
  {
    src: "https://images.unsplash.com/photo-1646488438698-2d5f8bd732e4?auto=format&fit=crop&w=1000&q=85",
    alt: "Un cucciolo di golden retriever vicino a una staccionata",
    note: "pronto per le coccole"
  },
  {
    src: "https://images.unsplash.com/photo-1614339548353-d8e9e871ad43?auto=format&fit=crop&w=1000&q=85",
    alt: "Un cucciolo di golden retriever che si riposa sul prato",
    note: "pausa pisolino"
  },
  {
    src: "https://images.unsplash.com/photo-1611003228941-98852ba62227?auto=format&fit=crop&w=1000&q=85",
    alt: "Un cucciolo di golden retriever sdraiato tranquillo",
    note: "coccole, per favore"
  },
  {
    src: "https://images.unsplash.com/photo-1737577681335-d15c0498b71f?auto=format&fit=crop&w=1000&q=85",
    alt: "Un cucciolo di golden retriever addormentato",
    note: "sogni d'oro"
  },
  {
    src: "https://images.unsplash.com/photo-1756391646109-e795420dc76e?auto=format&fit=crop&w=1000&q=85",
    alt: "Un cucciolo di golden retriever che si gode il sole",
    note: "un po' di felicità"
  }
];

const DECORATIONS = [
  { symbol: "✦", className: styles.sparkleOne },
  { symbol: "♡", className: styles.heartOne },
  { symbol: "✿", className: styles.flowerOne },
  { symbol: "🐾", className: styles.pawOne },
  { symbol: "♡", className: styles.heartTwo },
  { symbol: "✦", className: styles.sparkleTwo },
  { symbol: "🐾", className: styles.pawTwo }
];

function Decorations() {
  return (
    <div className={styles.decorations} aria-hidden="true">
      {DECORATIONS.map(({ symbol, className }, index) => (
        <span className={className} key={`${symbol}-${index}`}>
          {symbol}
        </span>
      ))}
    </div>
  );
}

function ClosedCard({ onOpen }: { onOpen: () => void }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.closedScene}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
      aria-label="Biglietto di compleanno"
    >
      <p className={styles.eyebrow}>una letterina tutta per te</p>
      <h1 className={styles.closedTitle}>
        Buon compleanno,
        <br />
        amore mio
      </h1>
      <button className={styles.envelopeButton} type="button" onClick={onOpen} aria-label="Apri il biglietto">
        <span className={styles.envelopeGlow} aria-hidden="true" />
        <span className={styles.envelope} aria-hidden="true">
          <span className={styles.envelopePaper}>
            <span>per te, con amore</span>
          </span>
          <span className={styles.envelopeBack} />
          <span className={styles.envelopePocket} />
          <span className={styles.envelopeFlap} />
          <span className={styles.seal}>♥</span>
        </span>
      </button>
      <p className={styles.openHint}>tocca il cuoricino per aprire</p>
    </motion.section>
  );
}

function ReadingCard({ secondsLeft }: { secondsLeft: number }) {
  return (
    <motion.section
      className={styles.letterScene}
      key="letter"
      aria-label="La lettera di compleanno"
      initial={{ opacity: 0, y: 24, scale: 0.96, rotate: -1.2 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -24, transition: { duration: 0.45 } }}
      transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className={styles.letterTape} aria-hidden="true">♥</div>
      <p className={styles.letterKicker}>per la festeggiata più bella</p>
      <h1 className={styles.letterTitle}>Tanti auguri!</h1>
      <div className={styles.letterDivider} aria-hidden="true">
        <span>✦</span>
        <span>♡</span>
        <span>✦</span>
      </div>
      <p className={styles.letterMessage}>{BIRTHDAY_MESSAGE}</p>
      <div className={styles.letterFooter}>
        <span>un bacione grande</span>
        <span className={styles.signatureHeart} aria-hidden="true">♥</span>
      </div>
      <div className={styles.waitNote} aria-live="off">
        <span className={styles.waitPaw} aria-hidden="true">🐾</span>
        <span>tra {secondsLeft} secondi arrivano i cuccioli</span>
      </div>
      <div className={styles.progressTrack} aria-hidden="true">
        <span className={styles.progressFill} />
      </div>
    </motion.section>
  );
}

function PhotoReveal() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.photoScene}
      key="photos"
      aria-label="Una sorpresa di golden retriever"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
    >
      <motion.div
        className={styles.photoHeading}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.1 }}
      >
        <p className={styles.eyebrow}>consegna speciale: una valanga di bau</p>
        <h1 className={styles.photoTitle}>G come Golden Retriever!</h1>
        <p className={styles.photoSubtitle}>Un piccolo esercito di musetti dolci, tutto per te.</p>
      </motion.div>

      <div className={styles.photoGrid}>
        {DOG_PHOTOS.map((photo, index) => (
          <motion.figure
            className={styles.photoCard}
            key={photo.src}
            initial={reduceMotion ? false : { opacity: 0, y: 42, scale: 0.82, rotate: index % 2 ? 8 : -8 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: index % 2 ? 2.5 : -2.5 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.15 + index * 0.1,
              type: "spring",
              stiffness: 135,
              damping: 13
            }}
            whileHover={reduceMotion ? undefined : { y: -8, rotate: 0, scale: 1.045, zIndex: 2 }}
          >
            <div className={styles.photoFrame}>
              <img className={styles.dogPhoto} src={photo.src} alt={photo.alt} loading={index < 3 ? "eager" : "lazy"} />
              <span className={styles.photoHeart} aria-hidden="true">♥</span>
            </div>
            <figcaption>{photo.note}</figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.p
        className={styles.photoFooter}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 1 }}
      >
        Spero che almeno uno di questi batuffoli ti abbia fatto sorridere ♥
      </motion.p>
    </motion.section>
  );
}

export function BirthdaySurprise() {
  const [phase, setPhase] = useState<Phase>("closed");
  const [secondsLeft, setSecondsLeft] = useState(30);

  useEffect(() => {
    if (phase !== "reading") return;

    const startedAt = Date.now();
    const revealTimer = window.setTimeout(() => setPhase("photos"), 30_000);
    const countdown = window.setInterval(() => {
      const remaining = Math.max(0, Math.ceil((30_000 - (Date.now() - startedAt)) / 1000));
      setSecondsLeft(remaining);
    }, 250);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearInterval(countdown);
    };
  }, [phase]);

  return (
    <main className={styles.page}>
      <div className={styles.sunshine} aria-hidden="true" />
      <Decorations />
      <AnimatePresence mode="wait">
        {phase === "closed" && <ClosedCard key="closed" onOpen={() => setPhase("reading")} />}
        {phase === "reading" && <ReadingCard key="letter" secondsLeft={secondsLeft} />}
        {phase === "photos" && <PhotoReveal key="photos" />}
      </AnimatePresence>
      <span className={styles.pageFooter}>fatto con amore e una zampa di golden ♥</span>
    </main>
  );
}
