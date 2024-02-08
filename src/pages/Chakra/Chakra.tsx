import type { FC } from 'react';

import {
    ChakraProvider,
    Tab,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
} from '@chakra-ui/react';

import { Buttons } from './Buttons.tsx';
import { FrameworkPage } from '../../features';
import { Typographies } from './Typographies.tsx';

const Chakra: FC = () => (
    <ChakraProvider>
        <Tabs isLazy>
            <TabList>
                <Tab>Preview</Tab>
                <Tab>Buttons</Tab>
                <Tab>Typography</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <FrameworkPage title="Chakra UI" />
                </TabPanel>
                <TabPanel>
                    <Buttons />
                </TabPanel>
                <TabPanel>
                    <Typographies />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </ChakraProvider>
);

export default Chakra;
