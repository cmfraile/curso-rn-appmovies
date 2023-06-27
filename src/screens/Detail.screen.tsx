import { Dimensions, ScrollView, StyleSheet, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { stackParams } from "./Main.screen";
import { useAppSelector } from "../store/store";
import { Image , View } from "react-native";
import { Result as movie } from "../interfaces/NowPlaying";

const { width , height } = Dimensions.get('screen');

const { container , image , title } = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    image:{
        width:width * 0.7,height:height * 0.7,
        margin:20,borderRadius:20
    },
    title:{textAlign:'center'}
});

const Sinopsis = ({overview}:{overview:string}) => (
    <>
    <Text>Sinopsis:</Text>
    <Text>{overview}</Text>
    </>
)

const Detail = () => {

    const { pop } = useNavigation<NativeStackNavigationProp<stackParams>>();
    const movie = useAppSelector((store) => store.movie);

    return(
        <ScrollView>

            <View style={container}>
                <Image style={image} source={{uri:movie.poster_path}}/>
                <Sinopsis overview={movie.overview}/>
            </View>

        </ScrollView>
    )

}

export default Detail