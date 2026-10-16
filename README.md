# Giacomo Pasin Website Portfolio

## Generated CV

The website and CV share education, experience, contact details, and skills in
`src/data/{education,experience,profile,skills}.json`. Project descriptions come
from the existing Markdown frontmatter in `_content/software-projects/`.

- Run `pnpm cv:build` to regenerate **`public/GiacomoPasin_CV.pdf`**, the exact file
  served by the existing Download CV button at `/GiacomoPasin_CV.pdf`.
- `pnpm build` (including the Docker build) regenerates the PDF before building
  Next.js. A failed CV compilation stops the build rather than shipping an old CV.
- Run `pnpm cv:tex` to generate only `build/cv/resume.tex` for inspection or Overleaf.
- Run `node --test scripts/build-cv.test.mjs` for the generator's focused checks.

Set `cv: true` on education or experience entries to include them. Their `details`
contain paragraphs (strings) and bullet lists (arrays of strings), with `*emphasis*`
and `[link text](https://example.com)` supported in both outputs. Optionally set
`cvBulletIndexes: [0, 2, 3]` to select items from the flattened details list;
paragraphs each count as one item. This curates the CV without duplicating wording.
Website visibility is independent of CV selection.

Use `cvBullets` on an education or experience entry for concise CV-specific
wording; it takes precedence over `cvBulletIndexes` and website details.

For projects, set `cv: true` and a numeric `cvOrder` in Markdown frontmatter;
unpublished projects are always excluded. The generated CV uses the shared project
title, description, language, date, and GitHub/live link by default. Optional
`cvTitle`, `cvTechnologies`, and `cvBullets` provide a shorter heading, selected
technologies, and accomplishment bullets for the CV. Current project bullets use
the XYZ approach (outcome, evidence or scope, and method); quantified claims must
be supported by the project record rather than invented.

Skill groups can set `cv: false` to omit a group from the CV, or `cvContents` to
select a relevant subset while retaining the full list on the website.

The template in `cv/template.tex` adapts
[Jake Gutierrez's résumé](https://github.com/jakegut/resume) to A4 with wrapping
headings and Latin Modern fonts. Its MIT license is in `cv/LICENSE`.

Local PDF compilation requires `pdflatex`: install MacTeX on macOS, or
`texlive-latex-extra texlive-fonts-recommended` on Debian/Ubuntu. For BasicTeX,
install missing packages with `tlmgr install preprint titlesec enumitem` (or use
`tlmgr init-usertree` then `tlmgr --usermode install preprint titlesec enumitem`
without administrator access). The Docker builder installs its own TeX packages;
they are excluded from the production image. Intermediate TeX files stay in the
ignored `build/cv/` directory. Commit the generated public PDF so it is available
during local development as well.

TODO:

- [ ] Add Lego showacse to website (see more on passions (create separate page))
- [ ] Add Engineering projects to website
- [x] Add Research and papers (create section)
- [x] Add ORA, Enforex (spanish),
- [x] Add Social Media Links
