import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home.screen";
import Detail from "./Detail.screen";

const Stack = createNativeStackNavigator();

const Main = () => {

    return(
        <Stack.Navigator
            initialRouteName="main"
            screenOptions={{
                headerShown:false,
            }}            
        >
            <Stack.Screen name="HomeScreen" component={Home}/>
            <Stack.Screen name="DetailScreen" component={Detail}/>
        </Stack.Navigator>
    )

}

export default Main