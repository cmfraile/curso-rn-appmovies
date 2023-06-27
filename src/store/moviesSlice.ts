import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Result as movie } from "../interfaces/NowPlaying";
import { Cast } from "../interfaces/cast";

const token:string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGUzMWY5MjQ4ZmE5M2FkZmM2MWY0ZTJhOThjYmY1ZSIsInN1YiI6IjY0OTU5ZTY1ODgwNTUxMDBhZTFkYjc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqJBj3YqeXVPFwcJPzIk78zqHbUQx7iPQBJOD2M7148';

//https://api.themoviedb.org/3/movie/now_playing?language=es-ES

const defaultQueryParams = (url:string) => `${url}?language=es-ES`;

const movieTransformResponse = ({results}:{results:movie[]}) => { return results.map(x => ({...x,poster_path:`https://image.tmdb.org/t/p/w300/${x.poster_path}`})) } ;

export interface minimalCast {profile_path:string|null,name:string,character:string|undefined} ;
const castTransformResponse = ({cast}:{cast:Cast[]}):minimalCast[] => { return cast
    .map(x => ({
    profile_path:(x.profile_path) ? `https://image.tmdb.org/t/p/w300${x.profile_path}` : null,
    name:x.name,character:x.character
})) } ;

const moviesSlice = createSlice({name:'movie',initialState:{} as movie,reducers:{
    setMovie:(state:movie,{payload}:PayloadAction<movie>) => ({...payload}),
}})

const moviesApi = createApi({
    reducerPath:'movies',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://api.themoviedb.org/3/movie',
        headers:{
            'Content-Type': 'application/json',
            ...{Authorization:`Bearer ${token}`}
        },
    }),
    endpoints:(builder) => ({

        //HOME
        nowPlaying:builder.query<movie[],void>({
            query:() => ({url:defaultQueryParams('/now_playing')}),
            transformResponse:movieTransformResponse,
        }),
        popular:builder.query<movie[],void>({
            query:() => ({url:defaultQueryParams('/popular')}),
            transformResponse:movieTransformResponse,
        }),
        upcoming:builder.query<movie[],void>({
            query:() => ({url:defaultQueryParams('/upcoming')}),
            transformResponse:movieTransformResponse,
        }),

        //CAST:
        cast:builder.query<minimalCast[],number>({
            query:(movie_id:number) => ({url:defaultQueryParams(`${movie_id}/credits`)}),
            transformResponse:castTransformResponse,
        }),

    })
});

const { 
    useNowPlayingQuery , 
    usePopularQuery , 
    useUpcomingQuery ,
    useCastQuery
} = moviesApi;

export { moviesApi , useNowPlayingQuery , usePopularQuery , useUpcomingQuery , useCastQuery , moviesSlice }