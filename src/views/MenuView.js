import React from 'react';
import { Linking, Image, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import SafeViewComponent from '../components/SafeViewComponent';
import { appColors } from '../styles/GlobalStyles';

const MenuView = ({ navigation }) => {
    return (<SafeViewComponent>
        <View style={styles.parentContainer}>
            <View style={styles.logoContainerStyle}>
                <Text style={styles.logoTextStyle}>ToQue</Text>
                <Image source={require("../../assets/schedule-calendar.png")} style={styles.logoImageStyle} />
            </View>
            <ScrollView style={styles.btnContainerStyle}>
                <TouchableOpacity style={styles.btnStyle} onPress={(e) => navigation.navigate('Gender')}>
                    <Text style={styles.btnTextStyle}>CONSULTAR HORARIO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={(e) => navigation.navigate('Schedule')}>
                    <Text style={styles.btnTextStyle}>ULTIMA CONSULTA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={(e) => Linking.openURL('https://app.toque.cf')}>
                    <Text style={styles.btnTextStyle}>VERSION WEB</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={(e) => navigation.navigate('SocialNetworks')}>
                    <Text style={styles.btnTextStyle}>REDES OFICIALES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={(e) => Linking.openURL('https://www.panamatramita.gob.pa/es')}>
                    <Text style={styles.btnTextStyle}>PANAMA TRAMITA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.btnStyle, marginBottom: 15 }} onPress={(e) => Linking.openURL('https://www.panamatramita.gob.pa/es')}>
                    <Text style={styles.btnTextStyle}>SALVOCONDUCTOS</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </SafeViewComponent>);
};

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: appColors.textPrimary,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 15,
        padding: 15
    },
    btnContainerStyle: {
        flex: 1,
        marginHorizontal: 60
    },
    btnTextStyle: {
        color: appColors.textSecondary,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    parentContainer: {
        backgroundColor: appColors.backgroudSecondary,
        flexGrow: 1,
        justifyContent: 'center'
    },
    logoImageStyle: {
        height: 180,
        width: 180,
        marginVertical: 10
    },
    logoContainerStyle: {
        alignItems: 'center',
        marginTop: 60
    },
    logoTextStyle: {
        color: appColors.textPrimary,
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default MenuView;