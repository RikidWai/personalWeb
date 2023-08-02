import React, { useState } from 'react';

import { Paper, Typography } from '@mui/material';
import classNames from 'classnames';

import DynamicIcon from '@/components/dynamic-icon';
import StyledText from '@/components/text/styled-text';
import { TimelineEventData, TimelineSide } from '@/components/timeline/types';
import { BREAKPOINTS } from '@/constants';
import useWindowSize from '@/hooks/use-window-size';

import styles from './styles.module.scss';

export type TimelineEventProps = TimelineEventData & {
    side?: TimelineSide;
};

function TimelineEvent({
    company,
    position,
    dates,
    skills,
    side = 'right'
}: TimelineEventProps): React.ReactElement {
    const [isHovered, setIsHovered] = useState(false);
    const { width } = useWindowSize();

    const onContentHovered = (hovered: boolean) => {
        setIsHovered(hovered);
    };

    const timelineClasses = classNames(styles.TimelineEvent, {
        [styles.hovered]: isHovered,
        [styles.left]: side === 'left',
        [styles.right]: side === 'right'
    });

    return (
        <div className={timelineClasses}>
            <figure className={styles.TimelinePoint} />
            <figure className={styles.TimelineLine} />
            <Paper
                className={styles.TimelineContent}
                onMouseEnter={() => onContentHovered(true)}
                onMouseLeave={() => onContentHovered(false)}
                onMouseDown={() => width < BREAKPOINTS.DESKTOP && onContentHovered(!isHovered)}
            >
                <Typography variant='h4' color='#0dcaf0' marginBottom={0}>
                    {company}
                </Typography>
                <Typography variant='h5' color='white'>
                    {position}
                </Typography>
                <StyledText bold colour='text.secondary'>
                    {dates}
                </StyledText>
                <div className={styles.TimelineHiddenContent}>
                    <StyledText bold>Skills</StyledText>
                    <div className={styles.TimelineSkills}>
                        {skills?.map((skill, index) => (
                            <DynamicIcon key={`${company}-icon-${skill}-${index}`} type={skill} />
                        ))}
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default TimelineEvent;
