import { FrameworkPage } from '../../features';
import { Tabs } from './Tabs';
import { Buttons } from './Buttons.tsx';
import { Typographies } from './Typographies.tsx';

const Custom = () => (
    <Tabs
        items={[
            {
                key: 'preview',
                label: 'Preview',
                children: <FrameworkPage title="Custom UI-kit" />
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

export default Custom;
