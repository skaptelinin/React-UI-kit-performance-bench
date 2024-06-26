import { type FC } from 'react';

import { QuestionCard, UnexpectedUnmount, Performance, RenderCycle } from './_widgets';

export const Interview: FC = () => (
    <>
        <h1>
            Interview
        </h1>
        <QuestionCard title="Unexpected unmount">
            <UnexpectedUnmount />
        </QuestionCard>
        <QuestionCard title="Render performance comparison">
            <Performance />
        </QuestionCard>
        <QuestionCard title="Render cycle">
            <RenderCycle />
        </QuestionCard>
    </>
);
