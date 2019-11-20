import React, {useRef} from 'react';
import {ScrollView, findNodeHandle} from "react-native";

export const INFO = Symbol('INFO');
export const ABOUT = Symbol('ABOUT');
export const CUSTOMISE = Symbol('CUSTOMISE');

export type ScrollableComponentId = typeof INFO | typeof ABOUT | typeof CUSTOMISE;

interface ScrollContextType {
    scrollTo: (componentId: ScrollableComponentId) => void,
    registerNode: (registerData: { id: ScrollableComponentId, node: React.RefObject<any> }) => any,
}

export const ScrollContext: React.Context<Partial<ScrollContextType>> =
    React.createContext({});

export function useScrollHandler() {
    const scrollView = useRef<ScrollView>(null)
    const nodes = useRef(new Map<ScrollableComponentId, React.RefObject<any>>())

    const scrollTo = (componentId: ScrollableComponentId) => {
        const node = nodes.current.get(componentId);
        if (node) {
            node.current.measureLayout(findNodeHandle(scrollView.current), (_: number, y: number) => {
                scrollView.current?.scrollTo({y})
            })
        }
    }
    const registerNode = ({id, node}: { id: ScrollableComponentId, node: React.RefObject<any> }) => {
        nodes.current.set(id, node);
    }
    return {scrollView, scrollTo, registerNode};
}
