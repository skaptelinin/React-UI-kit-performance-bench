import { type FC } from 'react';

import { LOREM_IPSUM, NUM_ARRAY } from '@/shared';

import { Layout } from './Layout.tsx';

export const RenderFuncList: FC = () => {
    const render = (key: number) => (
        <div key={key}>
            <h3>
                List item {key}
            </h3>
            <p>{LOREM_IPSUM}</p>
        </div>
    );

    return (
        <Layout title="Layout with render func">
            <div>
                {NUM_ARRAY.map((key) => render(key))}
            </div>
        </Layout>
    );
};
