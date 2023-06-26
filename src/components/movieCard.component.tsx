import { Result as movie } from "../interfaces/NowPlaying";
import { TouchableOpacity, View , Image } from "react-native";

const Movie = ({movie:{ id , poster_path }}:{movie:movie}) => {

    return(
        <TouchableOpacity onPress={() => console.log(id)} style={{flex:1}}>
            <Image style={{flex:1,borderRadius:30}} source={{uri:`https://image.tmdb.org/t/p/w300/${poster_path}`}}/>
        </TouchableOpacity>
    )

}

export default Movie