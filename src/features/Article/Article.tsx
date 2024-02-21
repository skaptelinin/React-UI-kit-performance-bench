import  type { FC } from 'react';

export const Article: FC<{
    title: string;
    subtitle: string;
    description: string;
    className?: string;
}> = ({ title, subtitle, description, className }) => {
    return (
        <div style={{ padding: '20px' }} className={className}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Article;
