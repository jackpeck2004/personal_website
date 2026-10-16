import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { escapeLatex } from "./build-cv.mjs";

test("escapes content without re-escaping generated TeX commands", () => {
  assert.equal(
    escapeLatex("C# & 50% of $x_{1} \\ ~ ^"),
    "C\\# \\& 50\\% of \\$x\\_\\{1\\} \\textbackslash{} \\textasciitilde{} \\textasciicircum{}"
  );
  assert.equal(escapeLatex("ETH Zürich – Present"), "ETH Zürich -- Present");
});

test("failed compilation exits with an error and leaves the downloadable PDF intact", () => {
  const pdf = new URL("../public/GiacomoPasin_CV.pdf", import.meta.url);
  const before = readFileSync(pdf);
  const result = spawnSync(
    process.execPath,
    [fileURLToPath(new URL("./build-cv.mjs", import.meta.url))],
    {
      env: { ...process.env, PATH: "" },
      encoding: "utf8"
    }
  );
  assert.equal(result.status, 1);
  assert.match(result.stderr, /pdflatex is required/);
  assert.deepEqual(readFileSync(pdf), before);
});
