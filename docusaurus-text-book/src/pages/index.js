import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css'; // Will create this CSS module

import ModuleCards from '../components/ModuleCards'; // Import ModuleCards component

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{"AI Systems in the Physical World – Embodied Intelligence"}</p> {/* Custom tagline */}
        <div className={styles.heroImageContainer}>
            <img src="/img/placeholder-hero.png" alt="Hero Image: Humanoid Robot" className={styles.heroImage} />
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Reading 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

function Home() {
  return (
    <Layout
      title="Homepage"
      description="An Interactive Textbook for Physical AI & Humanoid Robotics">
      <HomepageHeader />
      <main>
        <ModuleCards /> {/* Render ModuleCards component */}
      </main>
    </Layout>
  );
}

export default Home;
