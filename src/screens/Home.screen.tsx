import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNowPlayingQuery } from "../store/moviesSlice";

const Home = () => {

    const { isLoading , data } = useNowPlayingQuery();

    return(
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>HOME WORKS</Text>
        </SafeAreaView>
    )

}

export default Home