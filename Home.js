import React from 'react';
import {Text, View, Button} from 'react-native';
export default function Home({navigation}){
    return (
        <View style = {containerCenter}>
            <Text style = {centerText}>自我介紹</Text>
            <Button 
                title = "沈哲寬"
                onPress = {()=>navigation.navigate('沈哲寬')}
            />
            <Button 
                title = "郭建廷"
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