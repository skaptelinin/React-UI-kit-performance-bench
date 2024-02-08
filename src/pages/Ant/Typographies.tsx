import type { FC } from 'react';

import { Typography } from 'antd';

import { List } from '../../features';

export const Typographies: FC = () => (
    <List
        render={() => (
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
        )}
    />
);
