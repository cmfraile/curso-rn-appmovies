import { Dimensions, ScrollView, StyleSheet, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { stackParams } from "./Main.screen";
import { useAppSelector } from "../store/store";
import { Image , View } from "react-native";
import { Result as movie } from "../interfaces/NowPlaying";

const { width , height } = Dimensions.get('screen');

const { container , image , subtitle , content } = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    image:{
        width:width * 0.7,height:height * 0.7,
        margin:10,borderRadius:20
    },
    subtitle:{fontWeight:'700',padding:10,fontSize:20,minWidth:'100%'},
    content:{padding:10,textAlign:'justify'}
});

const Poster = ({title,poster_path,vote_average}:{title:string,poster_path:string,vote_average:number}) => {


    
    return(
        <>
            <Image style={image} source={{uri:poster_path}}/>
            <View style={{flex:1,justifyContent:'center',flexDirection:'row',minWidth:'100%'}}>
                <Text>{title}</Text>
                <Text style={{marginLeft:20}}>{Math.round(vote_average*2/2)} {String.fromCharCode(9733)}</Text>
            </View>
        </>
    )

}

const Sinopsis = ({overview}:{overview:string}) => (
    <>
        <Text style={subtitle}>Sinopsis:</Text>
        <Text style={content}>{overview}</Text>
    </>
)

const Detail = () => {

    const { pop } = useNavigation<NativeStackNavigationProp<stackParams>>();
    const movie = useAppSelector((store) => store.movie);

    return(
        <ScrollView>

            <View style={container}>
                <Poster title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average}/>
                <Sinopsis overview={movie.overview}/>
            </View>

        </ScrollView>
    )

}

export default Detail