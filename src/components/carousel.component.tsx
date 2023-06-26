import { View } from "react-native"
import { Result as movie } from "../interfaces/NowPlaying";
import { Text } from "react-native";
import Movie from "./movieCard.component";
import { default as CarouselComponent } from "react-native-snap-carousel";
import { Dimensions } from "react-native";

//https://image.tmdb.org/t/p/w300/


const Carousel = ({title,isMain,movieArray}:{title?:string,isMain:boolean,movieArray:movie[]}) => {

    const { width , height } = Dimensions.get('screen');
    
    return(
        <>
        { (title) && <Text>{title}</Text> }
        <CarouselComponent
            style={{height:(isMain) ? height / 2 : height / 3}}
            data={movieArray}
            renderItem={({item}) => <Movie movie={item}/>}
            sliderWidth={width}
            itemWidth={width/2.5}
            inactiveSlideOpacity={0.2}
        />
        </>
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