import React from 'react';

import { Tooltip } from '@mui/material';
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';

const Icons = { ...DiIcons, ...SiIcons, ...TbIcons };
export type IconKey = keyof typeof Icons;

type Props = {
    type: IconKey;
};

export default function DynamicIcon({ type }: Props): React.ReactElement {
    // eslint-disable-next-line import/namespace
    const IconComponent = Icons[type];

    const getSliceIndex = (str: string): number => {
        const matches = str.match(/[A-Z]/g);
        if (matches) {
            const match = matches[matches.length - 1];
            return str.lastIndexOf(match);
        }
        return 2;
    };

    const name = type.substr(getSliceIndex(type));
    if (IconComponent)
        return (
            <Tooltip title={name}>
                <div>
                    <IconComponent size='2rem' color='#0dcaf0' />
                </div>
            </Tooltip>
        );
}
