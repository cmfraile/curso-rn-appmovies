import { ActivityIndicator, ScrollView, Text, TurboModuleRegistry } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNowPlayingQuery } from "../store/moviesSlice";
import { useAppSelector } from "../store/store";
import Carousel from "../components/carousel.component";
import { View } from "react-native";

const Home = () => {

    const { isLoading , data } = useNowPlayingQuery();

    return(
        <SafeAreaView style={{flex:1}}>
            
            
            {(!data) ? <ActivityIndicator size={'large'} color={'red'}/>
            :
                <View style={{flex:1}}>
                    <Carousel isMain={true}     movieArray={data} />
                    <Carousel isMain={false}    movieArray={data} />
                    <Carousel isMain={false}    movieArray={data} />
                </View>
            }

        </SafeAreaView>
    )

}

export default Home