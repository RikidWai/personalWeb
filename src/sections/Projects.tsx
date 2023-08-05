import React from 'react';

import CenterGrid from '../components/center-grid';
import ProjectCard from '../components/project-card';
import Section from '../components/section';
import projs from '../info/projects.json';
function Projects(): React.ReactElement {
    return (
        <Section id='Projects' heading='Projects'>
            <CenterGrid>
                {projs.map((proj) => (
                    <ProjectCard
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
