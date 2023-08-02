import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

function TimelineLine(): React.ReactElement {
    return (
        <div className={styles.Timeline}>
            <figure className={classNames(styles.TimelineEdge, styles.TimelineTop)} />
            <figure className={classNames(styles.TimelineEdge, styles.TimelineBottom)} />
        </div>
    );
}

export default TimelineLine;
