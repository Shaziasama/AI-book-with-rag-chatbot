import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css'; // Will create this CSS module

const ModuleCard = ({title, description, imageUrl, link}) => {
  return (
    <Link to={link} className={clsx('card', styles.moduleCard)}>
      <div className="card__header">
        {imageUrl && (
          <div className={styles.moduleImageContainer}>
            <img src={imageUrl} alt={title} className={styles.moduleImage} />
          </div>
        )}
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
    </Link>
  );
};

const MODULES = [
  {
    title: 'Module 1: Foundations of Embodied AI',
    description: 'Explore the core concepts of AI in physical systems, focusing on perception, cognition, and action.',
    imageUrl: '/img/module1-placeholder.png',
    link: '/docs/intro', // Link to introduction for now
  },
  {
    title: 'Module 2: Robotic Perception and Sensing',
    description: 'Dive into advanced sensor fusion, computer vision, and tactile sensing for humanoid robots.',
    imageUrl: '/img/module2-placeholder.png',
    link: '/docs/digital-twin/01-gazebo-simulation', // Example link
  },
  {
    title: 'Module 3: Motion Planning and Control',
    description: 'Understand the algorithms and strategies for complex motion planning and dexterous manipulation.',
    imageUrl: '/img/module3-placeholder.png',
    link: '/docs/isaac/01-isaac-sim-overview', // Example link
  },
  {
    title: 'Module 4: Human-Robot Interaction and Learning',
    description: 'Examine safe and intuitive human-robot collaboration, learning from demonstration, and reinforcement learning.',
    imageUrl: '/img/module4-placeholder.png',
    link: '/docs/ros2/01-ros2-introduction', // Example link
  },
];

export default function ModuleCards() {
  return (
    <section className={styles.modulesSection}>
      <div className="container">
        <div className="row">
          {MODULES.map((props, idx) => (
            <div key={idx} className={clsx('col col--6 margin-bottom--lg')}>
              <ModuleCard {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
