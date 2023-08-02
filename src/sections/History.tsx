import React from 'react';

import Section from '../components/section';
import Timeline from '../components/timeline';

export default function History(): React.ReactElement {
    return (
        <Section id='History' heading='Work Experience'>
            <Timeline
                events={[
                    {
                        company: 'Vivid Seats',
                        position: 'Software Engineer',
                        dates: 'Jan 2023 - Aug 2023',
                        skills: [
                            'TbBrandNextjs',
                            'DiReact',
                            'DiNodejs',
                            'SiJest',
                            'SiTypescript',
                            'SiJava',
                            'SiGit',
                            'SiJira'
                        ]
                    },
                    {
                        company: 'Lifion by ADP',
                        position: 'Software Engineer',
                        dates: 'May 2022 - Aug 2022',
                        skills: [
                            'DiReact',
                            'DiNodejs',
                            'SiRedux',
                            'SiJest',
                            'SiTypescript',
                            'SiGit',
                            'SiJira'
                        ]
                    },
                    {
                        company: 'Bunch.live',
                        position: 'Game Developer',
                        dates: 'Sept 2021 - Dec 2021',
                        skills: ['SiUnity', 'SiCsharp', 'SiGit', 'SiJira']
                    },
                    {
                        company: 'Paramount Commerce',
                        position: 'Java Developer',
                        dates: 'Jan 2021 - April 2021',
                        skills: ['SiSpring', 'SiSelenium', 'SiRedis', 'SiJava', 'SiGit', 'SiJira']
                    },
                    {
                        company: 'MikeCrack',
                        position: 'Freelance Mod Developer',
                        dates: 'June 2020 - Sept 2020',
                        skills: ['SiMinecraft', 'SiJava', 'SiGit']
                    }
                ]}
                type='center'
            />
        </Section>
    );
}
