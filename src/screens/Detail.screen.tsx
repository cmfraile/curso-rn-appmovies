import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { stackParams } from "./Main.screen";

const Detail = () => {

    const { pop } = useNavigation<NativeStackNavigationProp<stackParams>>();

    return(
        <SafeAreaView>
            <Text>DETAIL WORKS</Text>
        </SafeAreaView>
    )

}

export default Detail