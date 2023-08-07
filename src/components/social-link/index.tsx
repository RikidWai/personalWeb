import React from 'react';

import { IconType } from 'react-icons';
import { useTheme } from '@mui/material';
import Paragraph from '../text/paragraph';
import './style.css';

type SocialLinkProps = {
    name: string;
    icon: IconType;
    url: string;
};

export default function SocialLink(props: SocialLinkProps): React.ReactElement {
    const { name, icon, url } = props;
    const theme = useTheme();
    return (
        <div className='SocialLink'>
            <a href={url} target='_blank' rel='noreferrer noopener'>
                {icon({ style: { color: theme.palette.primary.main } })}
                <Paragraph>{name}</Paragraph>
            </a>
        </div>
    );
}
