import { useCallback, useRef, useState } from 'react';
import type { RefObject } from 'react';

export const useToggleTransition = <T extends HTMLElement>(): {
    flag: boolean,
    nodeRef: RefObject<T>,
    toggleTransition: () => void,
} => {
    const [flag, setFlag] = useState<boolean>(false);

    const posRef = useRef<T>(null);
    const negRef = useRef<T>(null);
    const nodeRef = flag ? posRef : negRef;

    const toggleTransition = useCallback(() => {
        setFlag((value) => !value);
    }, []);

    return {
        nodeRef,
        flag,
        toggleTransition,
    };
};
