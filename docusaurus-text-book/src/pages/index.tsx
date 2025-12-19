import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroImageContainer}>
        <img src="/img/hero.jpg" alt="Physical AI & Humanoid Robotics" className={styles.heroImage} />
      </div>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
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

const modules = [
  {
    title: 'Module 1: Foundations of Physical AI',
    imageUrl: '/img/module1.jpg', // Placeholder image
    description: 'Explore the core concepts of physical AI, including robotics, control systems, and sensor integration.',
    link: '/docs/modules/module1', // Assuming this path exists
  },
  {
    title: 'Module 2: Humanoid Robotics Architectures',
    imageUrl: '/img/module2.jpg', // Placeholder image
    description: 'Dive into the design and functional aspects of humanoid robots, covering kinematics, dynamics, and actuation.',
    link: '/docs/modules/module2', // Assuming this path exists
  },
  {
    title: 'Module 3: Learning and Adaptation in Robots',
    imageUrl: '/img/module3.jpg', // Placeholder image
    description: 'Understand how robots learn from their environment and adapt their behaviors using advanced AI techniques.',
    link: '/docs/modules/module3', // Assuming this path exists
  },
  {
    title: 'Module 4: Ethical and Societal Implications',
    imageUrl: '/img/module4.jpg', // Placeholder image
    description: 'Discuss the broader impact of physical AI and humanoid robotics on society, including ethical considerations and future trends.',
    link: '/docs/modules/module4', // Assuming this path exists
  },
];

function ModuleCard({ title, imageUrl, description, link }) {
  return (
    <div className={clsx('col col--3', styles.moduleCard)}>
      <div className="card shadow--md">
        <div className="card__image">
          <img src={imageUrl} alt={title} className={styles.cardImage} />
        </div>
        <div className="card__body">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link
            className="button button--primary button--block"
            to={link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="An Interactive Textbook for Building the Next Generation of intelligent Robots.">
      <HomepageHeader />
      <main>
        <section className="padding-vert--xl">
          <div className="container text--center">
            <h2 className="margin-bottom--lg">Welcome to "Physical AI & Humanoid Robotics"</h2>
            <p className="hero__subtitle">
              This interactive textbook provides a comprehensive exploration of Physical AI and Humanoid Robotics,
              blending theoretical foundations with practical applications. Designed for students, researchers,
              and enthusiasts, it delves into the intricacies of designing, building, and programming intelligent
              robots that can interact with the physical world. From the basics of robotic control to advanced
              learning algorithms and ethical considerations, this book equips you with the knowledge and tools
              to contribute to the next generation of intelligent machines.
            </p>
          </div>
        </section>

        <section className={clsx('padding-vert--xl', styles.modules)}>
          <div className="container">
            <h2 className="text--center margin-bottom--lg">Modules</h2>
            <div className="row">
              {modules.map((props, idx) => (
                <ModuleCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
