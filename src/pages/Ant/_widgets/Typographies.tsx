import type { FC } from 'react';

import { Typography } from 'antd';

import { List } from '@/features';
import { LOREM_IPSUM } from '@/shared';

export const Typographies: FC = () => (
    <List
        render={() => (
            <Typography>
                {LOREM_IPSUM}
            </Typography>
        )}
    />
);
