import React, { PropsWithChildren } from 'react';

import { Typography } from '@mui/material';
import './style.css';

type SectionProps = PropsWithChildren & {
    heading?: string;
    id: string;
};
const defaultProps = {
    heading: ''
};

function Section(props: SectionProps): React.ReactElement {
    const { id, heading, children } = props;
    return (
        <div className='Section' id={id}>
            {heading && (
                <Typography
                    alignContent='center'
                    justifyContent='center'
                    justifySelf='center'
                    textAlign='center'
                    marginBottom='32px'
                    variant='h2'
                >
                    {heading}
                </Typography>
            )}
            <br />
            {children}
        </div>
    );
}

Section.defaultProps = defaultProps;
export default Section;
