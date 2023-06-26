import { ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNowPlayingQuery } from "../store/moviesSlice";
import { useAppSelector } from "../store/store";
import Carousel from "../components/carousel.component";

const Home = () => {

    const { isLoading , data } = useNowPlayingQuery();

    return(
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            {(!data) ? <ActivityIndicator size={'large'} color={'red'}/>
            :
                <>
                    <Carousel isMain={false} movieArray={data}/>
                </>
            }
        </SafeAreaView>
    )

}

export default Home