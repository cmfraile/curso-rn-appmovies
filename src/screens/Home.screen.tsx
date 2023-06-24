import { ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNowPlayingQuery } from "../store/moviesSlice";
import { useAppSelector } from "../store/store";

const Home = () => {

    const { isLoading , data } = useNowPlayingQuery();

    return(
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            {(isLoading) ? <ActivityIndicator size={'large'} color={'red'}/>
            :
                <>
                
                </>
            }
        </SafeAreaView>
    )

}

export default Home