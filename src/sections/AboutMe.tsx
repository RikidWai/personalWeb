import React from 'react';

import { Typography } from '@mui/material';

import CenterGrid, { GridItem } from '../components/center-grid';
import Section from '../components/section';
import Paragraph from '../components/text/paragraph';
import StyledText from '../components/text/styled-text';
import Lottie from 'lottie-react';
import travel from '../assets/animation/fly.json';
import { useTheme } from '@mui/material';

export default function AboutMe(): React.ReactElement {
    const theme = useTheme();
    return (
        <Section id='About'>
            <CenterGrid rowSpacing={0}>
                <GridItem xs={11} md={5}>
                    <img className='ProfileImage' src='./img/me.jpg' alt='Profile' width='100%' />
                </GridItem>
                <GridItem xs={11} md={7}>
                    <br />
                    <Typography variant='h1'>
                        <StyledText bold colour={theme.palette.primary.main}>
                            Ricky
                        </StyledText>{' '}
                        Chu
                    </Typography>
                    <br />
                    <Paragraph>
                        <StyledText bold>Halo :)</StyledText>
                        {` I'm Ricky, a graduate Computer Science student @ HKU`}
                    </Paragraph>
                    <Paragraph>
                        {`I love developing interesting digital products that have a real impact on customers, whether it's in the field of data science, software development, or the business side.`}
                    </Paragraph>
                    <Paragraph>
                        {`I've worked with Machine Learning Projects, GAN in Pytorch as well as React, Spring and MongoDB`}
                    </Paragraph>
                    <Paragraph>
                        {`But above all, I'm still trying to learn and be challenged by new tools, technologies and roles`}
                    </Paragraph>
                    <Paragraph>
                        {`Outside of programming, I'm enjoy playing the volleyball🏐, and enjoy traveling🗺️! And I'm a BURRITO🌯 lover! `}
                    </Paragraph>
                    <Lottie animationData={travel} style={{ height: 500 }} />
                </GridItem>
            </CenterGrid>
        </Section>
    );
}
