import { type FC, useEffect } from 'react';

import { LOREM_IPSUM } from '@/shared';

export const LoremIpsum: FC<{ trace: string }> = ({ trace }) => {
    useEffect(() => {
        console.log(`${trace} mount`);
    }, []);

    return (
        <p>
            {LOREM_IPSUM}
        </p>
    );
};
