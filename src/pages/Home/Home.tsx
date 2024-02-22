import type { FC } from 'react';

import { FadeSwitchTransition, CollapseTransition } from './_widgets';
import styles from './Home.module.css';

export const Home: FC = () => {
    return (
        <div className={styles['page-container']}>
            <FadeSwitchTransition />
            <CollapseTransition />
        </div>
    );
};
