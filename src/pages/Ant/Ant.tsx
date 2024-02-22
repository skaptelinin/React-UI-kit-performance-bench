import { FC } from 'react';

import { Tabs } from 'antd';

import { FrameworkPage } from '@/features';

import { Buttons, Typographies } from './_widgets';

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
