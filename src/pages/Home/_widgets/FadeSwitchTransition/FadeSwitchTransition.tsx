import { FC, useState } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Article } from '@/features';
import { useToggleTransition } from '@/shared';

import { MOCK_PAGES } from '../../_entities';
import './styles.css';

export const FadeSwitchTransition: FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const { nodeRef, toggleTransition } = useToggleTransition<HTMLDivElement>();

    const props = MOCK_PAGES[counter % MOCK_PAGES.length];

    const handleClick = () => {
        setCounter((prevState) => ++prevState);
        toggleTransition();
    };

    return (
        <div>
            <button onClick={handleClick}>
                Toggle
            </button>
            <TransitionGroup
                className="container-wrapper"
            >
                <CSSTransition
                    key={String(counter)}
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
