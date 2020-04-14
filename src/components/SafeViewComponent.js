import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

const SafeViewComponent = ({ children }) => {
    const insets = useSafeArea();
    return (<View style={[styles.safeViewStyles, { paddingTop: insets.top }]}>
        {children}
    </View>);
};

const styles = StyleSheet.create({
    safeViewStyles: {
        backgroundColor: '#fff',
        flex: 1
    }
});

export default SafeViewComponent;