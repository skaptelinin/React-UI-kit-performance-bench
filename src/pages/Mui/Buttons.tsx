import { Button } from '@mui/material';

import { List } from '../../features/List/List.tsx';

export const Buttons = () => (
    <List
        render={() => (
            <Button variant="contained">
                Button
            </Button>
        )}
    />
);
