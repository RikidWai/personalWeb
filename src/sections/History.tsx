import React from 'react';
import ReactDOM from 'react-dom';
import Section from '../components/section';
import Timeline from '../components/timeline';
import WorkExp from '../info/workExp.json';

export default function History(): React.ReactElement {
    return (
        <Section id='History' heading='Work Experience'>
            <Timeline events={WorkExp} type='center' />
        </Section>
    );
}
