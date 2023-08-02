import React, { useMemo } from 'react';

import classNames from 'classnames';

import TimelineEvents from '@/components/timeline/components/timeline-events';
import TimelineLine from '@/components/timeline/components/timeline-line';
import { TimelineEventData, TimelineType } from '@/components/timeline/types';

import useWindowSize from '../../hooks/use-window-size';

import styles from './styles.module.scss';

const FORCE_LEFT_WIDTH = 950;

type TimelineProps = {
    events: TimelineEventData[];
    type?: TimelineType;
};
function Timeline({ events, type = 'left' }: TimelineProps): React.ReactElement {
    const { width } = useWindowSize();
    const sizeBoundType = width <= FORCE_LEFT_WIDTH ? 'left' : type;
    const isCentered = sizeBoundType === 'center';
    const [leftChildren, rightChildren] = useMemo(() => {
        let leftChildren: TimelineEventData[];
        let rightChildren: TimelineEventData[];

        if (sizeBoundType === 'center') {
            leftChildren = events.filter((_, index) => index % 2 == 0);
            rightChildren = events.filter((_, index) => index % 2 != 0);
        } else if (sizeBoundType === 'right') {
            leftChildren = events;
            rightChildren = [];
        } else {
            leftChildren = [];
            rightChildren = events;
        }

        return [leftChildren, rightChildren];
    }, [events, sizeBoundType]);

    const timelineClasses = classNames(styles.TimelineContainer, {
        [styles.right]: sizeBoundType === 'right',
        [styles.center]: isCentered
    });
    return (
        <div className={timelineClasses}>
            {sizeBoundType != 'left' && (
                <TimelineEvents events={leftChildren} side='left' isCentered={isCentered} />
            )}
            <TimelineLine />
            {sizeBoundType != 'right' && (
                <TimelineEvents events={rightChildren} side='right' isCentered={isCentered} />
            )}
        </div>
    );
}

export default Timeline;
