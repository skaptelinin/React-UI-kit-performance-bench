import type { FC, ReactNode } from 'react';

import { NUM_ARRAY } from '../../shared';
import styles from './List.module.css';

export const List: FC<{ render: () => ReactNode }> = ({ render }) => (
    <ul className={styles.list}>
        {NUM_ARRAY.map((i) => (
            <li key={i}>
                {render()}
            </li>
        ))}
    </ul>
);
