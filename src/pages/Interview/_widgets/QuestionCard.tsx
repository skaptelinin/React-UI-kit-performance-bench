import { FC, ReactNode } from 'react';

export const QuestionCard: FC<{ title: string, children: ReactNode }> = ({
    title, children
}) => (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
);
