import { Result as movie } from "../interfaces/NowPlaying";
import { TouchableOpacity , Image } from "react-native";
import { useAppDispatch } from "../store/store";
import { moviesSlice } from "../store/moviesSlice";

const Movie = ({movie,isMain}:{movie:movie,isMain:boolean}) => {

    const dispatch = useAppDispatch();
    const press = () => dispatch(moviesSlice.actions.setMovie(movie));

    const { id , poster_path } = movie

    return(
        <TouchableOpacity onPress={press} style={{flex:1,marginHorizontal:(isMain) ? 10 : 5}}>
            <Image style={{flex:1,borderRadius:30}} source={{uri:`https://image.tmdb.org/t/p/w300/${poster_path}`}}/>
        </TouchableOpacity>
    )

}

export default Movie