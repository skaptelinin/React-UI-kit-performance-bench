import type { FC } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Article } from '../Article';
import { MOCK_PAGES } from '../mockPages.ts';
import { useToggleTransition } from '../../../shared';
import './styles.css';

export const FadeSwitchTransition: FC = () => {
    const { flag, nodeRef, toggleTransition } = useToggleTransition<HTMLDivElement>();

    const props = flag ? MOCK_PAGES[0] : MOCK_PAGES[1];

    return (
        <div style={{ padding: '20px' }}>
            <button onClick={toggleTransition}>
                Toggle
            </button>
            <TransitionGroup
                className="container-wrapper"
            >
                <CSSTransition
                    key={String(flag)}
                    nodeRef={nodeRef}
                    classNames="fade"
                    addEndListener={(done) => {
                        nodeRef.current?.addEventListener("transitionend", done, false);
                    }}
                >
                    <div ref={nodeRef}>
                        <Article {...props} />
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};
