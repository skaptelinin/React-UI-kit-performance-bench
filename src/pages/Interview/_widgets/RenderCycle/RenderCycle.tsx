import { type FC, type ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';

const useRenderCycle = (title: string) => {
    const ref = useRef();

    useEffect(() => {
        console.log('useEffect:', title);
        return () => {
            console.log('useEffect unmount:', title);
        }
    }, []);

    useLayoutEffect(() => {
        console.log('useLayoutEffect:', title);
        return () => {
            console.log('useLayoutEffect unmount:', title);
        }
    }, []);

    console.log('Render:', title);

    return ref;
};

const Template: FC<{ title: string, children?: ReactNode }> = ({ title, children }) => {
    const ref = useRenderCycle(title);

    return (
        <div
            ref={() => {
                console.log('Ref function:', title);
                return ref;
            }}
            id={title}
        >
            Component {title}
            {children}
        </div>
    );
};

const C: FC = () => {
    const ref = useRenderCycle('C');

    return (
        <div
            ref={() => {
                console.log('Ref function:', 'C');
                return ref;
            }}
            id="C"
        >
            Component C
        </div>
    );
};

const B: FC = () => {
    const ref = useRenderCycle('B');

    return (
        <div
            ref={() => {
                console.log('Ref function:', 'B');
                return ref;
            }}
            id="B"
        >
            Component B
            <C />
        </div>
    );
};

const A: FC = () => {
    const ref = useRenderCycle('A');

    return (
        <div
            ref={() => {
                console.log('Ref function:', 'A');
                return ref;
            }}
            id="A"
        >
            Component A
            <B />
        </div>
    );
};

const useToggle = (id: string): [boolean, () => void] => {
    const [open, setOpen] = useState<boolean>(false);

    useLayoutEffect(() => {
        if (open) {
            console.log('Render Cycle, useLayoutEffect', document.getElementById(id));
        }
    }, [open]);

    useEffect(() => {
        if (open) {
            console.log('Render Cycle, useEffect', document.getElementById(id));
        }
    }, [open]);

    return [open, () => setOpen((val) => !val)];
};

export const RenderCycle: FC = () => {
    const [open, toggle] = useToggle('Grandchild');
    const [open1, toggle1] = useToggle('C');

    return (
        <div>
            <div>
                <button onClick={toggle}>
                    {open ? 'Hide recursive' : 'Show recursive'}
                </button>
                {open && (
                    <Template title="Parent">
                        <Template title="Child">
                            <Template title="Grandchild" />
                        </Template>
                    </Template>
                )}
            </div>
            <div>
                <button onClick={toggle1}>
                    {open1 ? 'Hide direct' : 'Show direct'}
                </button>
                {open1 && <A />}
            </div>
        </div>
    );
};
