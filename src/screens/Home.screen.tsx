import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import moviesApi from "../store/moviesSlice";
import { useEffect } from "react";

const Home = () => {

    const data = moviesApi.useNowPlayingQuery();

    useEffect(() => console.log(JSON.stringify(data).substring(0,1000)),[data])

    return(
        <SafeAreaView>
            <Text>HOME WORKS</Text>
        </SafeAreaView>
    )

}

export default Home