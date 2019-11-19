import React from 'react';
import {View, StyleSheet} from "react-native";
import {NavigationTab} from "./NavigationTab";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tab: {
        flex:1,
        backgroundColor: 'red',
    }
});

const Navigation: React.FC = () => {
    return (
        <View style={styles.container} >
            <NavigationTab text={'Intro'}/>
            <NavigationTab text={'About'}/>
            <NavigationTab text={'Customise!'} last={true}/>
        </View>
    );
};

export default Navigation;
