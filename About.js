import React from "react";
import{View,Text,StyleSheet,Button} from 'react-native'

const About = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Welcome to About Screen</Text>
            <Button title='Go back to home' onPress={()=> navigation.goBack}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alginItems:'center',
        justifyContent:'center',
    },
});

export default About;