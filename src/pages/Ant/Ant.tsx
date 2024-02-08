import { FC } from 'react';

import { Tabs } from 'antd';

import { FrameworkPage } from '../../features';
import { Buttons } from './Buttons.tsx';
import { Typographies } from './Typographies.tsx';

const Ant: FC = () => (
    <Tabs
        destroyInactiveTabPane
        items={[
            {
                key: 'preview',
                label: 'Preview',
                children: <FrameworkPage title="Ant design" />
            },
            {
                key: 'buttons',
                label: 'Buttons',
                children: <Buttons />
            },
            {
                key: 'typography',
                label: 'Typography',
                children: <Typographies />
            },
        ]}
    />
);

export default Ant;
