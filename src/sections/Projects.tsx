import React from 'react';

import CenterGrid from '../components/center-grid';
import ProjectCard from '../components/project-card';
import Section from '../components/section';

function Projects(): React.ReactElement {
    return (
        <Section id='Projects' heading='Projects'>
            <CenterGrid>
                <ProjectCard
                    name='Metalworks'
                    description='Application to simplify hosting FoundryVTT on DigitalOcean, using React and Express'
                    image='/img/fvttdigitalocean.png'
                    url='https://dnd.tenzin.live'
                    repo='https://github.com/orgs/Foundry-Metalworks/repositories'
                />
                <ProjectCard
                    name='Strawgolem'
                    description='A Java Minecraft mod that adds a farming golem - with over 8 million downloads!'
                    image='/img/strawgolem.png'
                    url='https://www.curseforge.com/minecraft/mc-mods/strawgolem-reborn'
                    repo='https://github.com/t2pellet/strawgolem'
                />
                <ProjectCard
                    name='Salem Moderator'
                    description='React Native app to act as moderator for Salem 1692 (WIP)'
                    image='/img/salem.png'
                    url='https://salem.tenzin.live'
                    repo='https://github.com/t2pellet/SalemModerator'
                />
                <ProjectCard
                    name='Portfolio Site'
                    description="This website you're on! Made with React"
                    image='/img/website.png'
                    repo='https://github.com/t2pellet/tenzin.live'
                />
                <ProjectCard
                    name='Attention App'
                    description='Simple Kotlin Android app so you can pester your SO with annoying notifications'
                    image='/img/attentionapp.png'
                    repo='https://github.com/t2pellet/attentionapp'
                />
            </CenterGrid>
        </Section>
    );
}

export default Projects;
