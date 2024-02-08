import { useState } from 'react';
import type { FC, SyntheticEvent } from 'react';

import { Tabs, Tab } from '@mui/material';

import { FrameworkPage } from '../../features';
import { Buttons } from './Buttons.tsx';
import { Typographies } from './Typographies.tsx';
import styles from './Mui.module.css';

enum TabsType {
    preview,
    buttons,
    typography,
}

const Mui: FC = () => {
    const [tabType, setTabType] = useState<TabsType>(TabsType.preview);

    const handleChange = (_event: SyntheticEvent, newValue: number): void => {
        setTabType(newValue);
    };

    return (
        <div className={styles.wrapper}>
            <Tabs onChange={handleChange} value={tabType}>
                <Tab label="Preview" value={TabsType.preview} />
                <Tab label="Buttons" value={TabsType.buttons} />
                <Tab label="Typography" value={TabsType.typography} />
            </Tabs>
            {{
                [TabsType.preview]: <FrameworkPage title="Material UI" />,
                [TabsType.buttons]: <Buttons />,
                [TabsType.typography]: <Typographies />,
            }[tabType]}
        </div>
    );
}

export default Mui;
