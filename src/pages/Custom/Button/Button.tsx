import type { FC, ReactNode } from 'react';

import styles from './Button.module.css';

export const Button: FC<{ children: ReactNode }> = ({ children }) => (
    <button className={styles.btn}>
        <span>{children}</span>
    </button>
);
