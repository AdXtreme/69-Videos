import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const featureCards = [
  {
    title: 'Adsterra Growth',
    description:
      'Actionable ideas for growing ad revenue with smarter traffic and better placement decisions.',
    href: 'https://alcashzone.com/category/adsterra-earning/',
    label: 'Open playbook',
  },
  {
    title: 'AdSense Roadmap',
    description:
      'Cleaner approval strategies, content structure tips, and policy-aware publishing habits.',
    href: 'https://alcashzone.com/category/adsense-approval/',
    label: 'View guide',
  },
  {
    title: 'Blogging Systems',
    description:
      'Publishing workflows, niche thinking, and content habits built for long-term momentum.',
    href: 'https://alcashzone.com/category/blogging/',
    label: 'See ideas',
  },
  {
    title: 'Fresh News Flow',
    description:
      'A fast lane into headlines, trends, and stories that keep your content engine inspired.',
    href: 'https://newstick.us',
    label: 'Read updates',
  },
]

const quickStats = [
  { value: '04', label: 'Focused content lanes' },
  { value: '24/7', label: 'Creative energy' },
  { value: '100%', label: 'Custom landing vibe' },
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NILL-XD | Creative Launchpad</title>
        <meta
          name="description"
          content="NILL-XD explores monetization, blogging, and creator-focused content with a sharper visual identity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.ambientSecondary} aria-hidden="true" />
      <div className={styles.gridGlow} aria-hidden="true" />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Creative digital space</span>
            <h1 className={styles.title}>
              NILL-XD
              <span className={styles.titleAccent}>
                {' '}
                turns content ideas into a more polished web presence.
              </span>
            </h1>
            <p className={styles.description}>
              A redesigned front page with richer visuals, layered motion, and a
              cleaner brand feel for monetization, blogging, and publishing content.
            </p>

            <div className={styles.actions}>
              <a
                className={styles.primaryAction}
                href="https://alcashzone.com"
                target="_blank"
                rel="noreferrer"
              >
                Explore the hub
              </a>
              <a
                className={styles.secondaryAction}
                href="#discover"
              >
                See what&apos;s inside
              </a>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.panelBadge}>Live refresh</div>
            <div className={styles.panelOrbit} aria-hidden="true" />
            <div className={styles.panelContent}>
              <p className={styles.panelLabel}>Current identity</p>
              <h2 className={styles.panelTitle}>NILL-XD</h2>
              <p className={styles.panelText}>
                Built to feel bolder, smoother, and more premium than the default starter page.
              </p>
            </div>

            <div className={styles.stats}>
              {quickStats.map((stat) => (
                <div className={styles.statCard} key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="discover">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Featured paths</span>
            <h2>Pick the lane you want to grow next.</h2>
            <p>
              Each card now has a softer glass look, animated hover lift, and stronger visual hierarchy.
            </p>
          </div>

          <div className={styles.grid}>
            {featureCards.map((card, index) => (
              <a
                key={card.title}
                href={card.href}
                className={styles.card}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.cardIndex}>0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className={styles.cardLink}>
                  {card.label}
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
