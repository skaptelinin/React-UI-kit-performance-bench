import { useState } from 'react';
import type { FC, ReactNode } from 'react';

import styles from './Tabs.module.css';

interface Tab {
    key: string;
    label: ReactNode;
    children: ReactNode;
}

export const Tabs: FC<{ items: Tab[] }> = ({ items }) => {
    const [tab, setTab] = useState(() => items?.[0]?.key);

    const tabContent = items?.find(({ key }) => key === tab)?.children;

    return (
        <div className={styles['tabs-wrapper']}>
            <ul className={styles['tabs-list']}>
                {items?.map(({ key, label }) => (
                    <li
                        key={key}
                        onClick={() => setTab(key)}
                        className={`${styles.item} ${key === tab ? styles.chosen : ''}`.trim()}
                    >
                        {label}
                    </li>
                ))}
            </ul>
            {tabContent}
        </div>
    );
};
