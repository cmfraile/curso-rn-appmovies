import { Dimensions, FlatList , ScrollView, StyleSheet , Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { stackParams } from "./Main.screen";
import { useAppSelector } from "../store/store";
import { Image , View } from "react-native";
import { minimalCast, useCastQuery } from "../store/moviesSlice";
import { ActivityIndicator } from "react-native";

const { width , height } = Dimensions.get('screen');

const { container , image , subtitle , content } = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center',padding:20},
    image:{
        width:width * 0.7,height:height * 0.7,
        borderRadius:20,marginVertical:10
    },
    subtitle:{fontWeight:'700',fontSize:20,minWidth:'100%',marginTop:10},
    content:{textAlign:'justify'}
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
        <Text style={subtitle}>Sinopsis :</Text>
        <Text style={content}>{overview}</Text>
    </>
)

const CastSlider = ({movie_id}:{movie_id:number}) => {

    const { data , isLoading } = useCastQuery(movie_id);

    const Actor = ({actor:{profile_path,name,character}}:{actor:minimalCast}) => {

        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:10}} >
                {
                    ( profile_path)
                    ? <Image source={{uri:profile_path}} style={{flex:1,width:width*0.35,height:width*0.35,borderRadius:5}}/>
                    : <View style={{flex:1,width:width*0.35,height:width*0.35,justifyContent:'center',alignItems:'center'}}><Text>SIN FOTO</Text></View>
                }
                <Text>{name}</Text>
                <Text>{character}</Text>
            </View>
        )

    }

    return(
        (data)
        ?   <>
                <Text style={subtitle}>Reparto :</Text>
                <FlatList
                    style={{marginVertical:10}}
                    renderItem={({item}) => <Actor actor={item} />}
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </>
        : <ActivityIndicator size={'large'} color={'red'}/>
    )

}

const Detail = () => {

    const { pop } = useNavigation<NativeStackNavigationProp<stackParams>>();
    const movie = useAppSelector((store) => store.movie);



    return(
        <ScrollView>

            <View style={container}>
                <Poster title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average}/>
                <Sinopsis overview={movie.overview}/>
                <CastSlider movie_id={movie.id}/>
            </View>

        </ScrollView>
    )

}

export default Detail