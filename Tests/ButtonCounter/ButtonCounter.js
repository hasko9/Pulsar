/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonCounter = () => {
    const onClick = () => {
        //get platform
        //if android:
            //firebase update phone count + 1
        //if PC:
            //firebase update PC count +1
    };
  return (
    <View style={styles.container}>
        <View style={styles.mainView}>
            <View style={styles.scoreBoard}>
                <View style={styles.scoreBoardCell}>
                    <View style={styles.score}><Text style={styles.text}>(FB score)</Text></View>
                    <View style={styles.label}><Text style={styles.text}>PHONE</Text></View>
                </View>
                <View style={styles.scoreBoardCell}>
                    <View style={styles.score}><Text style={styles.text}>(FB score)</Text></View>
                    <View style={styles.label}><Text style={styles.text}>PC</Text></View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={onClick}><Text style={styles.buttext}>+1</Text></TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#29292B',
    },
    mainView: {
        flex: 1,
        flexDirection: 'column',
        width: '70%',
        alignSelf: 'center',
        backgroundColor: '#F8E7C0',
    },
    scoreBoard: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#55D6BE',
        width: '80%',
        alignSelf:'center',
        justifyContent: 'space-evenly',
    },
    scoreBoardCell: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    score: {
        flex: 2,
        alignSelf: 'stretch',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
        margin: 5,
    },
    text: {
        color: '#FE4A49',
        fontSize: 35,
    },
    buttext: {
        color: '#29292B',
        fontSize: 35,
    },
    label: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
        margin: 5,
    },
    button: {
        flex: 1,
        borderColor: '#FE4A49',
        borderWidth: 5,
        width: '80%',
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '10%',
        backgroundColor: '#F57FA4',
    },
});

export default ButtonCounter;
