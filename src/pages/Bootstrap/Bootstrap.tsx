import type { FC } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { FrameworkPage } from '../../features';
import { Buttons } from './Buttons.tsx';

const Bootstrap: FC = () => (
    <Tabs unmountOnExit>
        <Tab eventKey="preview" title="Preview">
            <FrameworkPage title="Bootstrap" />
        </Tab>
        <Tab eventKey="buttons" title="Buttons">
            <Buttons />
        </Tab>
        <Tab eventKey="typography" title="Typography">
            Nope ;(
        </Tab>
    </Tabs>
);

export default Bootstrap;
