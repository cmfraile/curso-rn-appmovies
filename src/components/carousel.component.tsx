import { StyleSheet, View } from "react-native"
import { Result as movie } from "../interfaces/NowPlaying";
import { Text } from "react-native";
import Movie from "./movieCard.component";
import { default as CarouselComponent } from "react-native-snap-carousel";
import { Dimensions } from "react-native"

//https://image.tmdb.org/t/p/w300/


const { main , notMain } = { main:0.7 , notMain:0.35 }
const thisStyleSheet = (width:number,height:number,isMain:boolean) => StyleSheet.create({
    carousel:{
        height:(isMain) ? height * main : height * notMain ,
        marginBottom:25
    },
    text:{
        padding:15,
        textAlign:(isMain) ? 'center' : 'left',
        fontSize:30 , fontWeight:'700'
    }
})


const Carousel = ({title,isMain,movieArray}:{title?:string,isMain:boolean,movieArray:movie[]}) => {

    const { width , height } = Dimensions.get('screen')
    const { carousel , text } = thisStyleSheet(width,height,isMain);
    
    return(
        <View style={carousel}>
        { (title) && <Text style={text}>{title}</Text> }
            <CarouselComponent
                data={movieArray}
                renderItem={({item}) => <Movie movie={item} isMain={isMain}/>}
                sliderWidth={width}
                itemWidth={(isMain) ? width * main : width * notMain}
                inactiveSlideOpacity={0.2}
            />
        </View>
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