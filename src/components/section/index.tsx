import React, { PropsWithChildren } from 'react';

import { Typography, useTheme } from '@mui/material';
import StyledText from '../text/styled-text';
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
    const theme = useTheme();
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
                    color={theme.palette.primary.main}
                >
                    <StyledText bold>{heading} </StyledText>
                </Typography>
            )}
            <br />
            {children}
        </div>
    );
}

Section.defaultProps = defaultProps;
export default Section;
