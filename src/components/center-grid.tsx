import React, { PropsWithChildren } from 'react';

import Grid from '@mui/material/Unstable_Grid2';

type CenterGridProps = PropsWithChildren & {
    columnSpacing?: number;
    rowSpacing?: number;
};
const defaultProps = {
    columnSpacing: 4,
    rowSpacing: 4
};

function CenterGrid(props: CenterGridProps): React.ReactElement {
    const { columnSpacing, rowSpacing, children } = props;
    return (
        <Grid
            container
            alignContent='center'
            justifyContent='center'
            justifySelf='center'
            alignItems='center'
            columnSpacing={columnSpacing}
            rowSpacing={rowSpacing}
            width='100%'
        >
            {children}
        </Grid>
    );
}
CenterGrid.defaultProps = defaultProps;

export const GridItem = Grid;
export default CenterGrid;
