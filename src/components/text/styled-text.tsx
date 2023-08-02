import React from 'react';

import { Box } from '@mui/material';
import { Color } from 'react-color';

type StyledTextProps = React.PropsWithChildren & {
    bold: boolean;
    colour?: Color;
};

const defaultProps = {
    colour: 'inherit'
};

function StyledText(props: StyledTextProps): React.ReactElement {
    const { bold, colour = defaultProps.colour, children } = props;

    return (
        <Box component='span' fontWeight={bold ? 'bold' : 'inherit'} color={colour.toString()}>
            {children}
        </Box>
    );
}

StyledText.defaultProps = defaultProps;

export default StyledText;
