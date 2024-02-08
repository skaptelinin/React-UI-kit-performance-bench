import type { FC, ReactNode } from 'react';

import styles from './Typography.module.css';

export const Typography: FC<{ children: ReactNode }> = ({ children }) => (
    <p className={styles.text}>
        {children}
    </p>
);
