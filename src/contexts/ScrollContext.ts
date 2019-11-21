import {useRef, createContext, Context, RefObject} from 'react';
import {ScrollView, findNodeHandle, NativeMethodsMixinStatic} from "react-native";

/* Because neither symbols nor primitives can be used as keys in WeakMap, I came with "special" objects */
const getIdentifier = (s: string) => [Symbol(s)];

export const INFO = getIdentifier('INFO');
export const ABOUT = getIdentifier('ABOUT');
export const CUSTOMISE = getIdentifier('CUSTOMISE');

export type ScrollableComponentId = typeof INFO | typeof ABOUT | typeof CUSTOMISE;

interface ScrollContextType {
    scrollTo: (componentId: ScrollableComponentId) => void,
    registerNode: (registerData: { id: ScrollableComponentId, node: RefObject<any> }) => any,
}

export const ScrollContext: Context<Partial<ScrollContextType>> =
    createContext({});


export function useScrollHandler() {
    const scrollView = useRef<ScrollView>(null)
    const nodes = useRef(new WeakMap<ScrollableComponentId, RefObject<NativeMethodsMixinStatic>>())

    const scrollTo = (componentId: ScrollableComponentId) => {
        const node = nodes.current.get(componentId);
        if (node) {
            const scrollViewNode = findNodeHandle(scrollView.current)
            if (scrollViewNode) {

                node.current?.measureLayout(scrollViewNode, (_: number, y: number) => {
                        scrollView.current?.scrollTo({y})
                    },
                    /* Dumb function to satisfy typings. I should probably extend NativeMethodsMixinStatic with
                    overloaded version of measureLayout where this parameter is optional, but I'm not sure if it's worth it */
                    () => {
                    })
            }
        }
    }
    const registerNode = ({id, node}: { id: ScrollableComponentId, node: RefObject<any> }) => {
        nodes.current.set(id, node);
    }
    return {scrollView, scrollTo, registerNode};
}
