import { Container, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'FoodSta',
      description: 'HTMML and CSS project',
    },
  ];

  return <section className="project" id="project"></section>;
};
