import type { FC } from 'react';

import { Link } from 'react-router-dom';

import { ROUTES } from '@/entities';
import styles from './Header.module.css';

const MAP_ROUTE_TO_TITLE: Record<ROUTES, string> = {
    [ROUTES.ant]: 'Ant',
    [ROUTES.mui]: 'Material UI',
    [ROUTES.chakra]: 'Chakra UI',
    [ROUTES.bootstrap]: 'Bootstrap',
    [ROUTES.custom]: 'Custom UI-kit',
    [ROUTES.home]: 'Back',
    [ROUTES.interview]: 'Interview',
}

export const Header: FC = () => (
    <header className={styles.header}>
        <span className={styles.logo} />
        {Object.entries(MAP_ROUTE_TO_TITLE).map(([route, title]) => (
            <Link to={route} key={route}>
                {title}
            </Link>
        ))}
    </header>
);
