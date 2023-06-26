import { View } from "react-native"
import { Result as movie } from "../interfaces/NowPlaying";
import { Text } from "react-native";
import Movie from "./movieCard.component";
import { default as CarouselComponent } from "react-native-snap-carousel";

//https://image.tmdb.org/t/p/w300/


const Carousel = ({title,isMain,movieArray}:{title?:string,isMain:boolean,movieArray:movie[]}) => {
    
    return(
        <CarouselComponent
            style={{flex:(isMain) ? 1 : 3}}
            data={movieArray}
            renderItem={({item}) => <Movie movie={item}/>}
            sliderWidth={500}
            itemWidth={300}
        />
    )

    /*
    return(
        <View style={{flex:1,flexDirection:'row',flexWrap:'nowrap'}}>
            {(title) && <Text>{title}</Text>}
            {movieArray.map( (x,i) => (<Movie movie={x} key={i}/>) )}
        </View>
    )
    */



}

export default Carousel