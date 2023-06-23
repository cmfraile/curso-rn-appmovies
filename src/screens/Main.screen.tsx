import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View , Text } from "react-native";

const Stack = createNativeStackNavigator();

const Main = () => {

    return(
        <Stack.Navigator
            initialRouteName="main"
        >
            <Stack.Screen name="main" component={<View><Text>HolaMundo</Text></View> as JSX.Element}/>
        </Stack.Navigator>
    )

}

export default Main