import { type FC } from 'react';

import { StaticList } from './StaticList.tsx';
import { RenderFuncList } from './RenderFuncList.tsx';

export const Performance: FC = () => (
    <div>
        <StaticList />
        <RenderFuncList />
    </div>
);
