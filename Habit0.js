import { View, Text, Image } from "react-native"
export default function Habit0(){
    return(
        <View>
            <Text>興趣: 打桌球,動作遊戲.</Text>
            <Image
                source={require("./assets/images/eldenring.jpg")}
                style = {{width:100, height:100}}
            />
            <Image 
                source={require("./assets/images/tabbletennis.jpg")}
                style = {{width:100, height:100}}
            />  
        </View>
    );
}