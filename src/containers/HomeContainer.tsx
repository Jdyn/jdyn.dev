import React from 'react';
import Home from '../components/Home';
import project, { Project } from '../lib/projects';
import tech, { Technology } from '../lib/technologies';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeContainer = (): JSX.Element => {
  const { phoenix, ios, node, react } = tech;
  const { academus, typer, jdyn, window, newProject } = project;

  const projects: Project[] = [academus, typer, jdyn, window, newProject];
  const cards: Technology[] = [ios, node, react, phoenix];

  return <Home cards={cards} projects={projects} />;
};

export default HomeContainer;
