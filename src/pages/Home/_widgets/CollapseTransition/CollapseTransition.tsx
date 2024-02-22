import type { FC } from 'react';

import { CSSTransition } from 'react-transition-group';

import { Article } from '@/features';
import { LOREM_IPSUM, useToggleTransition } from '@/shared';

import './styles.css';

export const CollapseTransition: FC = () => {
    const { flag, toggleTransition } = useToggleTransition();

    return (
        <div>
            <button onClick={toggleTransition}>
                {flag ? 'Collapse' : 'Expand'}
            </button>
            <CSSTransition
                in={flag}
                timeout={700}
                classNames="collapse"
                unmountOnExit
            >
                <Article
                    title="SEO rulez"
                    subtitle="Really rulez dude"
                    description={LOREM_IPSUM}
                    className="collapsible-article"
                />
            </CSSTransition>
        </div>
    );
};
