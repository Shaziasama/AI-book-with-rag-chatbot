import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

// Import images

import module1Image from '../../static/img/module1.png';
import module2Image from '../../static/img/module2.png';
import module3Image from '../../static/img/module3.png';
import module4Image from '../../static/img/module4.png';

const ModuleCard = ({ title, description, imageUrl }) => {
  return (
    <div className={clsx('card', styles.moduleCard)}>
      <div className="card__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card__body">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <Link
          className="button button--secondary button--block"
          to="/docs/intro">
          Learn More
        </Link>
      </div>
    </div>
  );
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.heroImageContainer}>
          <img src={heroImage} alt="Hero Image" className={styles.heroImage} />
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Reading
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const modules = [
    {
      title: 'Module 1: Foundations of Embodied AI',
      description: 'Explore the core concepts of physical AI, intelligent agents, and their interaction with the real world.',
      imageUrl: module1Image,
    },
    {
      title: 'Module 2: Humanoid Robotics Kinematics & Dynamics',
      description: 'Dive into the mechanics of humanoid robots, covering forward/inverse kinematics and dynamic control.',
      imageUrl: module2Image,
    },
    {
      title: 'Module 3: Perception and Sensing for Humanoids',
      description: 'Understand how humanoids perceive their environment using various sensors and advanced perception algorithms.',
      imageUrl: module3Image,
    },
    {
      title: 'Module 4: Control and Navigation in Complex Environments',
      description: 'Learn about control strategies, path planning, and navigation techniques for humanoid robots.',
      imageUrl: module4Image,
    },
  ];

  return (
    <Layout
      title={`Home`}
      description="An Open-Source Textbook for Advanced Robotics and AI">
      <HomepageHeader />
      <main>
        <section className={styles.introductionSection}>
          <div className="container">
            <h2 className="text--center">Introduction to Physical AI & Humanoid Robotics</h2>
            <p className="text--justify">
              Welcome to "Physical AI & Humanoid Robotics," an open-source textbook designed for advanced students and researchers interested in the cutting-edge intersection of artificial intelligence and robotics. This course delves into the theoretical foundations and practical applications of AI systems embodied in physical forms, with a particular focus on humanoid robots. We will cover topics ranging from the basic principles of embodied intelligence, robot kinematics, perception, control, and ethical considerations. The capstone project will involve designing and implementing a solution for a real-world challenge using physical AI principles, culminating in a functional prototype or simulation.
            </p>
          </div>
        </section>

        <section className={styles.modulesSection}>
          <div className="container">
            <h2 className="text--center">Modules</h2>
            <div className="row">
              {modules.map((module, idx) => (
                <div key={idx} className="col col--6 margin-bottom--lg">
                  <ModuleCard {...module} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optional: RAG Chatbot Placeholder */}
        <div className={styles.ragChatbotPlaceholder}>
          <span>⚫</span> {/* Chatbot icon */}
          <p>Chat with AI</p>
        </div>
      </main>
    </Layout>
  );
}