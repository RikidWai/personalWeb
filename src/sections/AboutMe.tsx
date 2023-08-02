import React from 'react';

import { Typography } from '@mui/material';

import CenterGrid, { GridItem } from '../components/center-grid';
import Section from '../components/section';
import Paragraph from '../components/text/paragraph';
import StyledText from '../components/text/styled-text';

export default function AboutMe(): React.ReactElement {
    return (
        <Section id='About'>
            <CenterGrid rowSpacing={0}>
                <GridItem xs={11} md={5}>
                    <img
                        className='ProfileImage'
                        src='/img/headshot.jpg'
                        alt='Profile'
                        width='100%'
                    />
                </GridItem>
                <GridItem xs={11} md={7}>
                    <br />
                    <Typography variant='h1'>
                        <StyledText bold colour='#0dcaf0'>
                            Ricky
                        </StyledText>{' '}
                        Chu
                    </Typography>
                    <br />
                    <Paragraph>
                        <StyledText bold>Hi :)</StyledText>
                        {` I'm Ricky, a graduate Computer Science student @ HKU`}
                    </Paragraph>
                    <Paragraph>
                        {`I love developing tangible, user-facing features, and feel I'm at my best when I can see my work, and the products I'm working on have real customer impact`}
                    </Paragraph>
                    <Paragraph>
                        {`I've worked with TypeScript, JavaScript and React, as well as Java, Spring and C#, Unity`}
                    </Paragraph>
                    <Paragraph>
                        {`But above all, I'm still trying to learn and be challenged by new tools, frameworks and roles`}
                    </Paragraph>
                    <Paragraph>
                        {`Outside of programming, I'm learning to play the Volleyball, and enjoy traveling, board games and jogging!`}
                    </Paragraph>
                </GridItem>
            </CenterGrid>
        </Section>
    );
}
