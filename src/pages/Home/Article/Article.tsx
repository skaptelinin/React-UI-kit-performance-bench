import  type { FC } from 'react';

export const Article: FC<{
    title: string;
    subtitle: string;
    description: string;
}> = ({ title, subtitle, description }) => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Article;
