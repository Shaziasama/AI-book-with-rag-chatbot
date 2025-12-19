import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Module 1: Foundations of Embodied AI',
    description: (
      <>
        This module introduces the fundamental concepts of embodied artificial intelligence. We will explore how AI systems can interact with the physical world, the role of sensors and actuators, and the challenges of perception and action in real-world environments.
      </>
    ),
    link: '/docs/modules/module1',
  },
  {
    title: 'Module 2: Humanoid Robotics Kinematics & Dynamics',
    description: (
      <>
        This module delves into the mathematical principles governing the motion of humanoid robots. We will cover forward and inverse kinematics, which are essential for understanding how a robot\'s joints move its end-effectors, and dynamics, which deals with the forces and torques involved in motion.
      </>
    ),
    link: '/docs/modules/module2',
  },
  {
    title: 'Module 3: Perception and Sensing for Humanoids',
    description: (
      <>
        This module focuses on how humanoid robots perceive their environment. We will explore various sensing modalities, from vision and depth sensing to touch and proprioception, and how these data are processed to build a coherent understanding of the surrounding world.
      </>
    ),
    link: '/docs/modules/module3',
  },
  {
    title: 'Module 4: Control and Navigation in Complex Environments',
    description: (
      <>
        In this module, we will examine the advanced control strategies and navigation techniques that enable humanoid robots to operate effectively in dynamic and complex environments. Topics include balance control, gait generation, motion planning, and human-robot interaction.
      </>
    ),
    link: '/docs/modules/module4',
  },
  {
    title: 'Capstone Project',
    description: (
      <>
        Integrate diverse technologies in a Capstone Project to build an autonomous humanoid robot system, combining knowledge from previous modules.
      </>
    ),
    link: '/docs/capstone-project',
  },
  {
    title: 'Tutorials',
    description: (
      <>
        Hands-on exercises and practical examples to reinforce your understanding of robotics and AI concepts, spanning across all modules.
      </>
    ),
    link: '/docs/tutorial-basics/create-a-document',
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <a href={link} className={styles.featureLink}>
        <div className={styles.cardContainer}>
          <div>
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
