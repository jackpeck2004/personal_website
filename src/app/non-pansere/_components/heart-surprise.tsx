"use client";

import { useState } from "react";
import styles from "./heart-surprise.module.css";

export function HeartSurprise() {
  const [opened, setOpened] = useState(false);

  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      {opened ? (
        <section className={styles.reveal} aria-label="La tua sorpresa">
          <img
            className={styles.photo}
            src="/golden-retriever.jpg"
            alt="Un golden retriever che corre felice sull’erba"
          />
          <div className={styles.photoShade} aria-hidden="true" />
          <p className={styles.message}>Non pansere, tissimo</p>
          <button className={styles.again} onClick={() => setOpened(false)} aria-label="Torna al cuore">
            ♥
          </button>
        </section>
      ) : (
        <section className={styles.prompt}>
          <p className={styles.eyebrow}>Una piccola sorpresa per te</p>
          <button
            className={styles.heartButton}
            type="button"
            onClick={() => setOpened(true)}
            aria-label="Apri la sorpresa"
          >
            <svg className={styles.heart} viewBox="0 0 120 110" aria-hidden="true">
              <path d="M60 103 12 56C-13 30 7 3 31 5c13 1 23 10 29 20C66 15 76 6 89 5c24-2 44 25 19 51Z" />
            </svg>
          </button>
          <p className={styles.hint}>Tocca il cuore</p>
        </section>
      )}
      <span className={styles.footer}>con amore ♥</span>
    </main>
  );
}
