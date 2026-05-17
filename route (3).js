/* app/globals.css */

@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Jost:wght@300;400;500&display=swap");

:root {
  /* Naturpalett — fjord, stein, tåke, tre */
  --stone-900: #1c1f1d;
  --stone-800: #2b302c;
  --stone-700: #3d433d;
  --moss: #5b6b54;
  --moss-deep: #404c3c;
  --sage: #8a9a82;
  --fog: #d7d9d2;
  --linen: #ece9e1;
  --linen-warm: #f4f1e8;
  --paper: #faf8f2;
  --rust: #a8623c;
  --gold: #c9a25a;

  --bg: var(--paper);
  --ink: var(--stone-900);
  --muted: #6f746b;

  --serif: "Fraunces", Georgia, serif;
  --sans: "Jost", system-ui, sans-serif;

  --maxw: 1200px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  font-weight: 300;
  font-size: 17px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection {
  background: var(--moss);
  color: var(--paper);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

h1,
h2,
h3,
h4 {
  font-family: var(--serif);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.01em;
}

.wrap {
  width: 100%;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 28px;
}

.eyebrow {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--moss);
}

/* ---------- Reveal-animasjon ---------- */
.reveal {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 1.1s var(--ease), transform 1.1s var(--ease);
}
.reveal.in {
  opacity: 1;
  transform: none;
}

/* ---------- Header ---------- */
.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 40px;
  transition: background 0.5s var(--ease), padding 0.5s var(--ease),
    backdrop-filter 0.5s var(--ease);
  mix-blend-mode: difference;
  color: #fff;
}
.site-header.scrolled {
  mix-blend-mode: normal;
  color: var(--ink);
  background: rgba(250, 248, 242, 0.82);
  backdrop-filter: blur(14px);
  padding: 16px 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.brand {
  font-family: var(--serif);
  font-size: 20px;
  letter-spacing: 0.02em;
}
.brand small {
  display: block;
  font-family: var(--sans);
  font-size: 10px;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  opacity: 0.7;
  margin-top: 3px;
}
.nav {
  display: flex;
  gap: 38px;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.nav a {
  position: relative;
  padding-bottom: 3px;
}
.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.4s var(--ease);
}
.nav a:hover::after {
  width: 100%;
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  color: #fff;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.08);
  animation: slowzoom 24s ease-out forwards;
}
@keyframes slowzoom {
  to {
    transform: scale(1);
  }
}
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 24, 20, 0.32) 0%,
    rgba(20, 24, 20, 0.1) 38%,
    rgba(20, 24, 20, 0.78) 100%
  );
}
.hero-inner {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 40px 88px;
}
.hero h1 {
  font-size: clamp(3rem, 8.5vw, 7.4rem);
  font-weight: 300;
  max-width: 14ch;
  text-shadow: 0 2px 30px rgba(0, 0, 0, 0.3);
}
.hero .lede {
  margin-top: 26px;
  max-width: 46ch;
  font-size: 19px;
  font-weight: 300;
  opacity: 0.94;
}
.hero-meta {
  margin-top: 40px;
  display: flex;
  gap: 40px;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.9;
}
.hero-meta span {
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  padding-left: 16px;
}
.scrollcue {
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  z-index: 3;
  width: 1px;
  height: 54px;
  background: rgba(255, 255, 255, 0.6);
  overflow: hidden;
}
.scrollcue::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #fff;
  animation: cue 2.4s var(--ease) infinite;
}
@keyframes cue {
  0% {
    transform: translateY(-100%);
  }
  60%,
  100% {
    transform: translateY(100%);
  }
}

/* ---------- Section base ---------- */
section {
  position: relative;
}
.section-pad {
  padding: 130px 0;
}
.section-head {
  max-width: 760px;
  margin-bottom: 70px;
}
.section-head h2 {
  font-size: clamp(2.1rem, 4.6vw, 3.6rem);
  margin-top: 18px;
}
.section-head p {
  margin-top: 22px;
  color: var(--muted);
  font-size: 18px;
  max-width: 58ch;
}

/* ---------- Intro / split ---------- */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  align-items: center;
}
.split-media {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
}
.split-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.4s var(--ease);
}
.split-media:hover img {
  transform: scale(1.05);
}
.split-media .frame-tag {
  position: absolute;
  left: 22px;
  bottom: 22px;
  color: #fff;
  font-size: 12px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.5);
}
.split-text h2 {
  font-size: clamp(2rem, 4vw, 3.1rem);
}
.split-text p {
  margin-top: 24px;
  color: var(--muted);
  font-size: 18px;
}
.facts {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.fact {
  background: var(--paper);
  padding: 22px 24px;
}
.fact .k {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--moss);
}
.fact .v {
  font-family: var(--serif);
  font-size: 21px;
  margin-top: 6px;
}

/* ---------- Guidebook grid ---------- */
.guide-band {
  background: var(--stone-900);
  color: var(--linen);
}
.guide-band .eyebrow {
  color: var(--gold);
}
.guide-band .section-head p {
  color: rgba(236, 233, 225, 0.7);
}
.guide-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.guide-card {
  background: var(--stone-900);
  padding: 46px 40px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background 0.5s var(--ease);
  cursor: pointer;
}
.guide-card:hover {
  background: var(--moss-deep);
}
.guide-card .gc-icon {
  width: 30px;
  height: 30px;
  stroke: var(--gold);
  stroke-width: 1.4;
  fill: none;
}
.guide-card h3 {
  font-size: 1.7rem;
  margin-top: 30px;
}
.guide-card p {
  margin-top: 14px;
  font-size: 15px;
  color: rgba(236, 233, 225, 0.66);
}
.guide-card .gc-go {
  margin-top: 28px;
  font-size: 12px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--gold);
  display: flex;
  align-items: center;
  gap: 10px;
}
.guide-card .gc-go::after {
  content: "→";
  transition: transform 0.4s var(--ease);
}
.guide-card:hover .gc-go::after {
  transform: translateX(8px);
}

/* ---------- Manual detail ---------- */
.manual-page {
  padding: 140px 0 130px;
}
.back-link {
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--moss);
  display: inline-flex;
  gap: 10px;
  margin-bottom: 50px;
}
.manual-page h1 {
  font-size: clamp(2.4rem, 6vw, 4.4rem);
  max-width: 16ch;
}
.manual-page .lede {
  margin-top: 22px;
  color: var(--muted);
  font-size: 19px;
  max-width: 54ch;
}
.manual-body {
  margin-top: 70px;
  max-width: 760px;
}
.m-section {
  padding: 44px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.m-section:first-child {
  border-top: none;
  padding-top: 0;
}
.m-section h3 {
  font-size: 1.7rem;
  margin-bottom: 20px;
}
.m-section p {
  color: var(--stone-700);
  font-size: 18px;
  white-space: pre-line;
}
.m-video {
  margin: 26px 0 6px;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--stone-900);
  border-radius: 2px;
  overflow: hidden;
}
.m-video video,
.m-video iframe {
  width: 100%;
  height: 100%;
  border: 0;
  object-fit: cover;
}
.m-check {
  list-style: none;
  margin-top: 8px;
}
.m-check li {
  padding: 16px 0 16px 38px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 17px;
}
.m-check li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 19px;
  width: 18px;
  height: 18px;
  border: 1.5px solid var(--moss);
  border-radius: 50%;
}
.m-check li::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 23px;
  width: 7px;
  height: 4px;
  border-left: 1.5px solid var(--moss);
  border-bottom: 1.5px solid var(--moss);
  transform: rotate(-45deg);
}

/* ---------- Contact / footer ---------- */
.contact {
  background: var(--linen-warm);
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.contact h2 {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
}
.contact p {
  margin-top: 22px;
  color: var(--muted);
  font-size: 18px;
}
.contact-card {
  background: var(--paper);
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 50px;
}
.contact-card .row {
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.contact-card .row:last-child {
  border-bottom: none;
}
.contact-card .k {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--moss);
}
.contact-card .v {
  font-family: var(--serif);
  font-size: 22px;
  margin-top: 6px;
}
footer {
  background: var(--stone-900);
  color: rgba(236, 233, 225, 0.7);
  padding: 60px 0;
  font-size: 14px;
}
footer .wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
footer .brand {
  color: var(--linen);
}
footer a {
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 12px;
}

/* ---------- Admin ---------- */
.admin-shell {
  min-height: 100vh;
  background: var(--linen);
}
.admin-login {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--stone-900);
  color: var(--linen);
  padding: 24px;
}
.admin-login form {
  width: 100%;
  max-width: 380px;
  text-align: center;
}
.admin-login h1 {
  font-size: 2.2rem;
  margin: 18px 0 8px;
}
.admin-login p {
  color: rgba(236, 233, 225, 0.6);
  margin-bottom: 34px;
  font-size: 15px;
}
.field {
  margin-bottom: 18px;
  text-align: left;
}
.field label {
  display: block;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--moss);
  margin-bottom: 8px;
}
.input,
.textarea,
.select {
  width: 100%;
  background: var(--paper);
  border: 1px solid rgba(0, 0, 0, 0.16);
  color: var(--ink);
  padding: 14px 16px;
  font-family: var(--sans);
  font-size: 16px;
  border-radius: 2px;
  outline: none;
  transition: border-color 0.3s;
}
.input:focus,
.textarea:focus,
.select:focus {
  border-color: var(--moss);
}
.textarea {
  min-height: 130px;
  resize: vertical;
  line-height: 1.6;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--moss);
  color: var(--paper);
  border: none;
  padding: 15px 30px;
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: background 0.3s var(--ease), transform 0.2s;
}
.btn:hover {
  background: var(--moss-deep);
}
.btn:active {
  transform: translateY(1px);
}
.btn.ghost {
  background: transparent;
  color: var(--ink);
  border: 1px solid rgba(0, 0, 0, 0.22);
}
.btn.ghost:hover {
  background: rgba(0, 0, 0, 0.05);
}
.btn.danger {
  background: transparent;
  color: var(--rust);
  border: 1px solid rgba(168, 98, 60, 0.4);
}
.btn.danger:hover {
  background: rgba(168, 98, 60, 0.08);
}
.btn.small {
  padding: 10px 18px;
  font-size: 11px;
}

.admin-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 40px;
  background: var(--paper);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 20;
}
.admin-top .brand {
  font-size: 18px;
}
.admin-main {
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px 40px 120px;
}
.admin-section-title {
  font-family: var(--serif);
  font-size: 1.9rem;
  margin: 50px 0 8px;
}
.admin-section-title:first-child {
  margin-top: 0;
}
.admin-hint {
  color: var(--muted);
  font-size: 15px;
  margin-bottom: 28px;
}
.card {
  background: var(--paper);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 28px;
  margin-bottom: 18px;
}
.card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 4px;
}
.card-head h3 {
  font-size: 1.4rem;
}
.card-actions {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.block-editor {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 14px;
  background: var(--linen-warm);
}
.block-editor .block-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}
.block-type {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--moss);
}
.toast {
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--stone-900);
  color: var(--linen);
  padding: 14px 28px;
  border-radius: 3px;
  font-size: 14px;
  letter-spacing: 0.04em;
  z-index: 100;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}
.uploading {
  font-size: 13px;
  color: var(--moss);
  margin-top: 8px;
}

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .site-header,
  .site-header.scrolled {
    padding: 18px 22px;
  }
  .nav {
    display: none;
  }
  .hero-inner {
    padding: 0 24px 64px;
  }
  .hero-meta {
    flex-direction: column;
    gap: 14px;
  }
  .split,
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }
  .guide-grid {
    grid-template-columns: 1fr;
  }
  .section-pad {
    padding: 90px 0;
  }
  .admin-main,
  .admin-top {
    padding-left: 22px;
    padding-right: 22px;
  }
  .grid-2 {
    grid-template-columns: 1fr;
  }
  .wrap {
    padding: 0 22px;
  }
}
