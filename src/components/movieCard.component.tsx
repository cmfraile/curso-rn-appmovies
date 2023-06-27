import { Result as movie } from "../interfaces/NowPlaying";
import { TouchableOpacity , Image } from "react-native";
import { useAppDispatch } from "../store/store";
import { moviesSlice } from "../store/moviesSlice";
import { stackParams } from "../screens/Main.screen";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface props {movie:movie,isMain:boolean}
const Movie = ({movie,isMain}:props) => {

    const { navigate } = useNavigation<NativeStackNavigationProp<stackParams>>();

    const dispatch = useAppDispatch();
    const press = () => { dispatch(moviesSlice.actions.setMovie(movie)) ; navigate('Detail') }

    return(
        <TouchableOpacity onPress={press} style={{flex:1,marginHorizontal:(isMain) ? 10 : 5}}>
            <Image style={{flex:1,borderRadius:30}} source={{uri:movie.poster_path}}/>
        </TouchableOpacity>
    )

}

export default Movie