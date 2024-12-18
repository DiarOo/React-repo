import React from "react";
import{View,Text,StyleSheet,Button} from 'react-native'

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Welcome to Home Screen</Text>
            <Button title='Go to About Screen' onPress={()=> navigation.navigate('About')}></Button>
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

export default Home;