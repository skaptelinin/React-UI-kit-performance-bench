import { FC, ReactNode } from 'react';


const QuestionCard: FC<{ title: string, children: ReactNode }> = ({
    title, children
}) => (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
);

export default QuestionCard;
