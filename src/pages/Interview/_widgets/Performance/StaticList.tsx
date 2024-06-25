import { type FC } from 'react';

import { LOREM_IPSUM, NUM_ARRAY, useForceRender } from '@/shared';

import { Layout } from './Layout.tsx';

export const StaticList: FC = () => {
    return (
        <Layout title="Just static layout">
            <div>
                {NUM_ARRAY.map((key) => (
                    <div key={key}>
                        <h3>
                            List item {key}
                        </h3>
                        <p>{LOREM_IPSUM}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
};
