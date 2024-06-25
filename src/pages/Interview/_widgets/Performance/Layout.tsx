import { type FC, ReactNode, useState } from 'react';

import { useForceRender } from '@/shared';

export const Layout: FC<{ children: ReactNode, title: string }> = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen((val) => !val);

    const rerender = useForceRender();

    return (
        <div>
            <h2>
                {title}
            </h2>
            <div>
                <button onClick={rerender}>
                    rerender
                </button>
                <button onClick={toggle}>
                    {isOpen ? 'Hide' : 'Show'}
                </button>
            </div>
            {isOpen && children}
        </div>
    );
};
