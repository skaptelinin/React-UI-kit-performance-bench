import type { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { List } from '@/features';
import { LOREM_IPSUM } from '@/shared';

export const Typographies: FC = () => (
    <List
        render={() => (
            <Text>
                {LOREM_IPSUM}
            </Text>
        )}
    />
);
