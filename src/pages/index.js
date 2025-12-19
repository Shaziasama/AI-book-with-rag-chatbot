import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

        <Heading as="h1" className="hero__title">
          Physical AI & Humanoid Robotics
        </Heading>
        <p className="hero__subtitle">Embodied intelligence, real-world AI systems, and humanoid design</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Reading 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="An Open-Source Textbook for Advanced Robotics and AI">
      <HomepageHeader />
      <main>
        <section className={styles.contentSection}>
          <div className="container">
            <div className="row">
              <div className="col">
                <Heading as="h2">Welcome to Physical AI & Humanoid Robotics</Heading>
                <p>
                  This open-source textbook provides a comprehensive exploration into the fascinating world of Physical AI and Humanoid Robotics. Designed for students, researchers, and enthusiasts, this book bridges the gap between theoretical knowledge and practical application, guiding you through the essential concepts and cutting-edge technologies that are shaping the future of intelligent robots.
                </p>
                <Heading as="h3">What You Will Learn</Heading>
                <p>
                  Our journey begins with the foundational elements of <strong>ROS 2</strong>, the Robot Operating System 2, which serves as the backbone for inter-robot communication and modular system design. We then delve into <strong>Digital Twin</strong> technologies, exploring how simulation environments like Gazebo and Unity are indispensable for developing, testing, and refining robot behaviors in a safe and efficient manner.
                </p>
                <p>
                  The book further explores <strong>NVIDIA Isaac</strong>, a powerful platform for accelerating AI in robotics, covering its simulation capabilities (Isaac Sim) and its rich set of ROS packages (Isaac ROS) for perception, navigation, and manipulation.
                </p>
                <p>
                  Finally, we introduce <strong>Vision-Language-Action (VLA) models</strong>, a rapidly evolving field that aims to imbue robots with the ability to understand complex human commands, interpret visual information, and execute intelligent actions in the physical world. The culmination of this learning is a <strong>Capstone Project</strong>, where you will integrate these diverse technologies to build an autonomous humanoid robot system.
                </p>
                <Heading as="h3">Key Features</Heading>
                <ul>
                  <li><strong>Modular Learning:</strong> Chapters are organized into distinct modules, allowing for focused learning.</li>
                  <li><strong>Practical Examples:</strong> Each section includes code snippets in Python and ROS 2 to illustrate concepts.</li>
                  <li><strong>Diagrams & Visualizations:</strong> Conceptual diagrams help clarify complex topics (placeholders provided).</li>
                  <li><strong>Exercises:</strong> Hands-on exercises at the end of each module to reinforce understanding.</li>
                  <li><strong>RAG Chatbot Integration:</strong> Placeholders for an interactive RAG (Retrieval Augmented Generation) chatbot that can provide quick answers and supplementary information.</li>
                  <li><strong>Deployment Ready:</strong> Configured for easy deployment on platforms like GitHub Pages.</li>
                </ul>
                <Heading as="h3">Begin Your Journey</Heading>
                <p>
                  Whether you are new to robotics or looking to deepen your expertise in AI-powered physical systems, this textbook offers a structured and engaging learning path.
                </p>
                <div className="alert alert--info">
                  <p>Navigate through the <strong>Book</strong> section in the sidebar to start exploring the modules.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}