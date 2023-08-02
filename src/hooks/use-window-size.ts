import { useCallback, useEffect, useState } from 'react';

import { BREAKPOINTS } from '../constants';

export enum Size {
    MOBILE = 'mobile',
    TABLET = 'tablet',
    DESKTOP = 'desktop',
    DESKTOP_XL = 'desktopXL'
}

export function isDesktop(size: Size): boolean {
    return size === Size.DESKTOP || size === Size.DESKTOP_XL;
}

export default function useWindowSize(): { width: number; size: Size } {
    const [width, setWidth] = useState(0);
    const updateWidth = useCallback(() => {
        setWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, [updateWidth]);

    let size = Size.MOBILE;
    if (width > BREAKPOINTS.DESKTOP_XL) size = Size.DESKTOP_XL;
    else if (width > BREAKPOINTS.DESKTOP) size = Size.DESKTOP;
    else if (width > BREAKPOINTS.TABLET) size = Size.TABLET;
    return { width, size };
}
