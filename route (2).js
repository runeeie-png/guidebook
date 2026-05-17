// app/page.js
import Link from "next/link";
import { getContent } from "@/lib/store";
import Header from "./components/Header";
import Reveal from "./components/Reveal";
import Icon from "./components/Icon";

export const dynamic = "force-dynamic";

// Rolige fjord-/naturbilder (royalty-fri, Unsplash). Byttes enkelt ut senere.
const IMG = {
  hero: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=2400&q=80",
  house:
    "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=80",
  area: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
};

export default async function Home() {
  const { house, manuals } = await getContent();

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${IMG.hero})` }}
        />
        <div className="hero-inner">
          <Reveal>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>
              Feriebolig til leie · Ryfylke
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1>{house.name}</h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="lede">{house.tagline}</p>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero-meta">
              <span>{house.checkIn}</span>
              <span>{house.checkOut}</span>
              <span>Ryfylke · Norge</span>
            </div>
          </Reveal>
        </div>
        <div className="scrollcue" />
      </section>

      {/* HUSET */}
      <section id="huset" className="section-pad">
        <div className="wrap">
          <div className="split">
            <Reveal className="split-media">
              <img src={IMG.house} alt="Villaen i Alsvik" />
              <span className="frame-tag">Villaen — Alsvik</span>
            </Reveal>
            <div className="split-text">
              <Reveal>
                <div className="eyebrow">Velkommen</div>
              </Reveal>
              <Reveal delay={100}>
                <h2>Et hus som puster med fjorden</h2>
              </Reveal>
              <Reveal delay={200}>
                <p>{house.intro}</p>
              </Reveal>
              <Reveal delay={300}>
                <div className="facts">
                  <div className="fact">
                    <div className="k">Innsjekk</div>
                    <div className="v">{house.checkIn.replace("Innsjekk ", "")}</div>
                  </div>
                  <div className="fact">
                    <div className="k">Utsjekk</div>
                    <div className="v">{house.checkOut.replace("Utsjekk ", "")}</div>
                  </div>
                  <div className="fact">
                    <div className="k">Beliggenhet</div>
                    <div className="v">Alsvik</div>
                  </div>
                  <div className="fact">
                    <div className="k">Region</div>
                    <div className="v">Ryfylke</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDEBOOK */}
      <section id="guidebook" className="guide-band section-pad">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <div className="eyebrow">Guidebook</div>
            </Reveal>
            <Reveal delay={100}>
              <h2>Alt du trenger for et godt opphold</h2>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Korte, tydelige veiledninger med tekst og video — fra ankomst
                til avreise. Trykk på et tema for å lese mer.
              </p>
            </Reveal>
          </div>

          <div className="guide-grid">
            {manuals.map((m, i) => (
              <Reveal key={m.id} delay={i * 70}>
                <Link href={`/guide/${m.id}`} className="guide-card">
                  <Icon name={m.icon} />
                  <div>
                    <h3>{m.title}</h3>
                    <p>{m.summary}</p>
                  </div>
                  <span className="gc-go">Les veiledning</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OMRÅDET */}
      <section id="omradet" className="section-pad">
        <div className="wrap">
          <div className="split">
            <div className="split-text">
              <Reveal>
                <div className="eyebrow">Området</div>
              </Reveal>
              <Reveal delay={100}>
                <h2>Ryfylke rett utenfor døren</h2>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  Fra Alsvik natursenter med stier og badeplasser, til
                  Preikestolen og fjordcruise på Lysefjorden — det meste ligger
                  innen rekkevidde for en dagstur. Du finner detaljerte tips i
                  guidebook-delen.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <Link
                  href="/guide/omradet"
                  className="btn"
                  style={{ marginTop: 34 }}
                >
                  Se opplevelser
                </Link>
              </Reveal>
            </div>
            <Reveal className="split-media">
              <img src={IMG.area} alt="Ryfylke landskap" />
              <span className="frame-tag">Lysefjorden · Ryfylke</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="contact section-pad">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <Reveal>
                <div className="eyebrow">Kontakt</div>
              </Reveal>
              <Reveal delay={100}>
                <h2>Er det noe du lurer på?</h2>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  Ta gjerne kontakt før eller under oppholdet. Vi svarer så
                  raskt vi kan, og hjelper gjerne med tips til turer og
                  praktiske ting.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150} className="contact-card">
              <div className="row">
                <div className="k">Vert</div>
                <div className="v">{house.contactName}</div>
              </div>
              <div className="row">
                <div className="k">Telefon</div>
                <div className="v">{house.contactPhone}</div>
              </div>
              <div className="row">
                <div className="k">E-post</div>
                <div className="v">{house.contactEmail}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="brand">Villaen i Alsvik</div>
          <div>Ryfylke, Norge — {new Date().getFullYear()}</div>
          <Link href="/admin">Admin</Link>
        </div>
      </footer>
    </>
  );
}
