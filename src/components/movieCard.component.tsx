import { Result as movie } from "../interfaces/NowPlaying";
import { TouchableOpacity , Image } from "react-native";
import { useAppDispatch } from "../store/store";
import { moviesSlice } from "../store/moviesSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stackParams } from "../screens/Main.screen";

//interface props extends StackScreenProps<any,any>{};


const Movie = ({movie,isMain,navigate}:{movie:movie,isMain:boolean,navigate:() => void}) => {

    const dispatch = useAppDispatch();
    const press = () => { dispatch(moviesSlice.actions.setMovie(movie)) ; navigate()  }

    const { poster_path } = movie

    return(
        <TouchableOpacity onPress={press} style={{flex:1,marginHorizontal:(isMain) ? 10 : 5}}>
            <Image style={{flex:1,borderRadius:30}} source={{uri:`https://image.tmdb.org/t/p/w300/${poster_path}`}}/>
        </TouchableOpacity>
    )

}

export default Movie