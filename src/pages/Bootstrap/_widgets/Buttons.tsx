import type { FC } from 'react';

import { Button } from 'react-bootstrap';

import { List } from '@/features';

export const Buttons: FC = () => (
    <List
        render={() => (
            <Button variant="primary">
                Button
            </Button>
        )}
    />
);
