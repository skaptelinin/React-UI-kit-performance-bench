import { type FC, type ReactNode, useEffect, useRef, useState } from 'react';

import { useForceRender } from '@/shared';

import { LoremIpsum } from './LoremIpsum.tsx';

type State = 'first' | 'second' | 'lorem';

export const UnexpectedUnmount: FC = () => {
    const forceRender = useForceRender();
    const [state, setState] = useState<State>('first');
    const renderLoremRef = useRef(null);
    const justDivRef = useRef(null);

    useEffect(() => {
        console.log('renderLoremRef changed')
    }, [renderLoremRef.current]);

    useEffect(() => {
        console.log('justDivRef changed')
    }, [justDivRef.current]);

    const renderLoremIpsum = () => (
        <div ref={renderLoremRef}>
            <LoremIpsum trace="Render function" />
        </div>
    );

    const varLoremIpsum = <LoremIpsum trace="Var" />;

    return (
        <div>
            <button onClick={forceRender}>
                rerender
            </button>
            {renderLoremIpsum()}
            <div ref={justDivRef}>
                {varLoremIpsum}
            </div>
            <div>
                {(['first', 'second', 'lorem'] satisfies State[]).map((key) => (
                    <button key={key} onClick={() => setState(key)}>
                        {key}
                    </button>
                ))}
                <div>
                    {({
                        first: <span>First</span>,
                        second: <span>Second</span>,
                        lorem: <LoremIpsum trace="Pattern match" />,
                    } satisfies Record<State, ReactNode>)[state]}
                </div>
            </div>
        </div>
    );
};
