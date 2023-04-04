import React from 'react';
import {Text, View, Button, Linking} from 'react-native';
export default function Person0({navigation}){
    return (
        <View style = {containerCenter}>
            <Text style = {centerText}>沈哲寬</Text>
            <Button 
                title = "基本資料"
                onPress = {()=>navigation.navigate('基本資料0')}
            />
            <Button 
                title = "興趣"
                onPress = {()=>navigation.navigate('興趣0')}
            />
            <Button
                title = "FB"
                onPress = {()=>{Linking.openURL("https://www.facebook.com/boxmilkbox")}}
            />
        </View>
    );
}

const containerCenter = {
    alignItems: 'center',     //水平置中
    justifyContent: 'center', //垂直置中
    flex: 1
}
const centerText = {
    textAlign: 'center',
    fontSize: 50,
    textShadowColor: 'blue',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4
  }