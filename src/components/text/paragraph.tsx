import React, { PropsWithChildren } from 'react';

import { Typography } from '@mui/material';

type ParagraphProps = PropsWithChildren & {
    colour?: string;
    size?: string;
};

const defaultProps = {
    colour: 'text.secondary',
    size: '16px'
};

function Paragraph(props: ParagraphProps): React.ReactElement {
    const { children, colour, size } = props;
    return (
        <Typography variant='body1' paragraph color={colour} fontSize={size}>
            {children}
        </Typography>
    );
}

Paragraph.defaultProps = defaultProps;

export default Paragraph;
