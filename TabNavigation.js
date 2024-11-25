import { AboutStackNavigator } from "./StackNavigator";
import{createBottomTabNavigator} from "./StackNavigaor";
import{MaterialCommunityIcons} from '@expo/vector-icon';


const Tab = createBottomTabNavigator();

const ButtomTabNavigator = () =>{
    return(
        <Tab.Navigator
            tabBarOption = {{
                activeTintColor: 'white',
                inactiveTintColor:'lightgray',
                style:{
                    backgroundColor:'#FF6347'
                },
                labelStyle:{
                    fontSize:12,
                }
            }}
        >
            <Tab.Screen
                name ='Home'
                component = {{
                    tabBarLabel:'Home',
                    tabBarcon: ({color}) => (
                        <MaterialCommunityIcons name="home" size={26} color ={color}></MaterialCommunityIcons>
                    )
                }}
              >
            </Tab.Screen>
            <TabScreen
            name="About"
            componen={AboutStackNavigator}
            options={{
                tabBarLabel:'About',
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="bideo-stabilization" size={26} color={color}/>
                )
            }}/>
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;