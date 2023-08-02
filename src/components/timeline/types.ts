import { IconKey } from '@/components/dynamic-icon';

export type TimelineType = 'left' | 'right' | 'center';

export type TimelineSide = 'left' | 'right';

export type TimelineEventData = {
    company: string;
    position: string;
    dates: string;
    skills?: IconKey[];
};
