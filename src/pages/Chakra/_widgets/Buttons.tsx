import type { FC } from 'react';

import { Button } from '@chakra-ui/react';

import { List } from '@/features';

export const Buttons: FC = () => (
    <List
        render={() => (
            <Button colorScheme="blue">
                Button
            </Button>
        )}
    />
);
