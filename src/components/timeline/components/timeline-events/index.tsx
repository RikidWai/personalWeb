import React from 'react';

import classNames from 'classnames';

import { TimelineEventData, TimelineSide } from '../../types';

import TimelineEvent from './components/timeline-event';
import styles from './styles.module.scss';

type Props = {
    events: TimelineEventData[];
    side: TimelineSide;
    isCentered?: boolean;
};

function TimelineEvents({ events, side, isCentered = false }: Props): React.ReactElement {
    const children = events.map(({ company, dates, position, skills }, index) => (
        <TimelineEvent
            key={`timeline-event-${company}-${dates}-${index}`}
            company={company}
            position={position}
            dates={dates}
            skills={skills}
            side={side}
        />
    ));

    const classes = classNames(styles.TimelineEvents, {
        [styles.left]: side === 'left',
        [styles.right]: side === 'right',
        [styles.centered]: isCentered
    });
    return <div className={classes}>{children}</div>;
}

export default TimelineEvents;
