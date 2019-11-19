import React, {useCallback, useRef} from 'react';
import {ScrollView, View} from "react-native";

export enum CardType {
    INFO,
    ABOUT,
    CUSTOMISE,
}

export const ScrollContext: React.Context<(cardType?: CardType) => void> = React.createContext(() => {
});

export function useScrollHandler() {
    const scrollView = useRef<ScrollView>(null)
    const infoRef = useRef<View>(null);
    const aboutRef = useRef<View>(null);
    const customiseRef = useRef<View>(null);
    const positions = useRef(new Map<CardType, number>())
    const scrollTo = useCallback((cardType?: CardType) => {
        switch (cardType) {
            case CardType.ABOUT:
            case CardType.INFO:
            case CardType.CUSTOMISE:
                scrollView.current?.scrollTo({y: positions.current.get(cardType) || 0})
        }
    }, [infoRef, aboutRef, customiseRef])
    infoRef.current?.measure((_, y) => positions.current.set(CardType.INFO, y));
    aboutRef.current?.measure((_, y) => positions.current.set(CardType.ABOUT, y));
    customiseRef.current?.measure((_, y) => positions.current.set(CardType.CUSTOMISE, y));
    return {scrollView, infoRef, aboutRef, customiseRef, scrollTo};
}
