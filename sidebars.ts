import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'intro', // Assuming 'intro.md' exists in docs/
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Module 1: Foundations of Embodied AI',
      items: ['modules/module1'],
    },
    {
      type: 'category',
      label: 'Module 2: Humanoid Robotics Kinematics & Dynamics',
      items: ['modules/module2'],
    },
    {
      type: 'category',
      label: 'Module 3: Perception and Sensing for Humanoids',
      items: ['modules/module3'],
    },
    {
      type: 'category',
      label: 'Module 4: Control and Navigation in Complex Environments',
      items: ['modules/module4'],
    },
    {
      type: 'category',
      label: 'Capstone Project',
      link: {
        type: 'doc',
        id: 'capstone-project', // Assuming 'capstone-project.md' exists in docs/
      },
      items: [],
    },
  ],
};

export default sidebars;