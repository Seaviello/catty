import React, {useContext} from 'react';
import {StyleSheet, View} from "react-native";
import {NavigationTab} from "./NavigationTab";
import {CardType, ScrollContext} from "../contexts/ScrollContext";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

const Navigation: React.FC = () => {
    const scrollTo = useContext(ScrollContext);

    return (
        <View style={styles.container} >
            <NavigationTab text={'HALKO'} onPress={() => scrollTo(CardType.INFO)}/>
            <NavigationTab text={'About'} onPress={() => scrollTo(CardType.ABOUT)} withSeparator={true}/>
            <NavigationTab text={'Customise!'} onPress={() => scrollTo(CardType.CUSTOMISE)} />
        </View>
    );
};

export default Navigation;
