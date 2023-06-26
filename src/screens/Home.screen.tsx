import { ActivityIndicator, ScrollView, Text, TurboModuleRegistry } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNowPlayingQuery , usePopularQuery , useUpcomingQuery } from "../store/moviesSlice";
import { useAppSelector } from "../store/store";
import Carousel from "../components/carousel.component";
import { View } from "react-native";
import { useEffect } from "react";

const Home = () => {

    const { isLoading:nowPlayingLoading , data:nowPlayingData } = useNowPlayingQuery() ;
    const { isLoading:usePopularQueryLoading , data:PopularData } = usePopularQuery() ;
    const { isLoading:useUpcomingLoading , data:UpcomingData } = useUpcomingQuery() ;

    return(
        <ScrollView style={{flex:1}}>
            {( nowPlayingLoading && usePopularQueryLoading && useUpcomingLoading ) ? <ActivityIndicator size={'large'} color={'red'}/>
            :
                <View style={{flex:1}}>
                    <Carousel isMain={true}     movieArray={nowPlayingData||[]}   title={'en cartelera'}/>
                    <Carousel isMain={false}    movieArray={PopularData||[]}   title={'exitos'}/>
                    <Carousel isMain={false}    movieArray={UpcomingData||[]}   title={'populares'}/>
                </View>
            }
        </ScrollView>
    )

}

export default Home