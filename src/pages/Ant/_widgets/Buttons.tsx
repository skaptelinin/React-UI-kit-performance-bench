import { FC } from 'react';

import { Button } from 'antd';

import { List } from '@/features';

export const Buttons: FC = () => (
    <List
        render={() => (
            <Button type="primary">
                Button
            </Button>
        )}
    />
);
