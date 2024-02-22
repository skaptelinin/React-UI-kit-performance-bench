import type { FC } from 'react';

import { List } from '@/features';
import { LOREM_IPSUM } from '@/shared';

import { Typography } from '../_shared';

export const Typographies: FC = () => (
    <List
        render={() => (
            <Typography>
                {LOREM_IPSUM}
            </Typography>
        )}
    />
);
