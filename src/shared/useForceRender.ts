import { useState } from 'react';

export const useForceRender = () => {
    const [, setForceRender] = useState<number>(0);

    return () => {
        setForceRender((val) => ++val);
    };
};
