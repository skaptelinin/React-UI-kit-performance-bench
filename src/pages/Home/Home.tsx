import type { FC } from 'react';

import { FadeSwitchTransition } from './FadeSwitchTransition';
import { CollapseTransition } from './CollapseTransition';
import styles from './Home.module.css';

export const Home: FC = () => {
    return (
        <div className={styles['page-container']}>
            <FadeSwitchTransition />
            <CollapseTransition />
        </div>
    );
};
