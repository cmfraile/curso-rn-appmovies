import { ActivityIndicator, ScrollView } from "react-native";
import { useNowPlayingQuery , usePopularQuery , useUpcomingQuery } from "../store/moviesSlice";
import Carousel from "../components/carousel.component";
import { View } from "react-native";

const Home = () => {

    const { isLoading:nowPlayingLoading , data:nowPlayingData } = useNowPlayingQuery() ;
    const { isLoading:usePopularQueryLoading , data:PopularData } = usePopularQuery() ;
    const { isLoading:useUpcomingLoading , data:UpcomingData } = useUpcomingQuery() ;

    const isAllLoaded = () => (nowPlayingLoading && usePopularQueryLoading && useUpcomingLoading) ;

    return(
        <ScrollView style={{flex:1}}>
            {isAllLoaded() ? <ActivityIndicator size={'large'} color={'red'}/>
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