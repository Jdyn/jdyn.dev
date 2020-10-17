import React from 'react';
import Home from '../components/Home';
import project, { Project } from '../lib/projects';
import tech, { Technology } from '../lib/technologies';

interface Props {
  children?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeContainer: React.FC<Props> = (props: Props): JSX.Element => {
  const { phoenix, ios, node, react } = tech;
  const { academus, typer, jdyn, window, newProject } = project;

  const projects: Project[] = [academus, typer, jdyn, window, newProject];
  const cards: Technology[] = [ios, node, phoenix, react];

  return <Home cards={cards} projects={projects} />;
};

export default HomeContainer;
