import { ActivityIndicator, ScrollView } from "react-native";
import { useNowPlayingQuery , usePopularQuery , useUpcomingQuery } from "../store/moviesSlice";
import Carousel from "../components/carousel.component";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stackParams } from "./Main.screen";

interface props extends NativeStackScreenProps<stackParams,'Home'>{};
const Home = ({navigation}:props) => {

    const navCallback = () => navigation.navigate('Detail');

    const { isLoading:nowPlayingLoading , data:nowPlayingData } = useNowPlayingQuery() ;
    const { isLoading:usePopularQueryLoading , data:PopularData } = usePopularQuery() ;
    const { isLoading:useUpcomingLoading , data:UpcomingData } = useUpcomingQuery() ;

    const isAllLoaded = () => (nowPlayingLoading && usePopularQueryLoading && useUpcomingLoading) ;

    return(
        <ScrollView style={{flex:1}}>
            {isAllLoaded() ? <ActivityIndicator size={'large'} color={'red'}/>
            :
                <View style={{flex:1}}>
                    <Carousel isMain={true}     movieArray={nowPlayingData||[]}   title={'en cartelera'} navigate={navCallback}/>
                    <Carousel isMain={false}    movieArray={PopularData||[]}   title={'exitos'} navigate={navCallback}/>
                    <Carousel isMain={false}    movieArray={UpcomingData||[]}   title={'populares'} navigate={navCallback}/>
                </View>
            }
        </ScrollView>
    )

}

export default Home