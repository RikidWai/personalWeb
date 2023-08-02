import React from 'react';

import './style.css';
import { Paper, Typography, useTheme } from '@mui/material';

import { GridItem } from '../center-grid';
import Paragraph from '../text/paragraph';

type ProjectCardProps = {
    name: string;
    description: string;
    image: string;
    url?: string;
    repo: string;
};

export default function ProjectCard({
    name,
    description,
    image,
    url,
    repo
}: ProjectCardProps): React.ReactElement {
    const { palette } = useTheme();

    const openUrl = (openingUrl: string) => {
        const tab = window.open(openingUrl, '_blank');
        if (tab != null) tab.focus();
    };

    return (
        <GridItem xs={11} sm={6} md={4} lg={3}>
            <Paper className='ProjectCard' onClick={() => url && openUrl(url)}>
                <img className='ProjectCardImage' src={image} alt={name} />
                <div className='ProjectCardContent'>
                    <div
                        className='ProjectCardBody'
                        style={{ backgroundColor: palette.background.paper }}
                    >
                        <Typography variant='h5'>{name}</Typography>
                        <Paragraph size='14px'>{description}</Paragraph>
                    </div>
                    <div
                        className='ProjectCardLink'
                        onClickCapture={(e) => {
                            e.stopPropagation();
                            openUrl(repo);
                        }}
                    >
                        <Paragraph colour='text.primary'>Source Code</Paragraph>
                    </div>
                </div>
            </Paper>
        </GridItem>
    );
}
