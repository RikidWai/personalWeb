import React from 'react';

import projs from '../assets/info/projects.json';
import CenterGrid from '../components/center-grid';
import ProjectCard from '../components/project-card';
import Section from '../components/section';
function Projects(): React.ReactElement {
    return (
        <Section id='Projects' heading='Projects'>
            <CenterGrid>
                {projs.map((proj) => (
                    <ProjectCard
                        key={proj.name}
                        name={proj.name}
                        description={proj.description}
                        image={proj.image}
                        url={proj.url}
                        repo={proj.repo}
                    />
                ))}
            </CenterGrid>
        </Section>
    );
}

export default Projects;
