import type { FC } from 'react';

import { List } from '../../features';
import { Typography } from './Typography';
import { LOREM_IPSUM } from '../../shared';

export const Typographies: FC = () => (
    <List
        render={() => (
            <Typography>
                {LOREM_IPSUM}
            </Typography>
        )}
    />
);
