import type { FC } from 'react';

export const FrameworkPage: FC<{ title: string }> = ({ title }) => (
    <article>
        <h1>
            {title}
        </h1>
    </article>
);
